import { useState } from 'react';
import { Product } from "../../../Type/Product";
import { formatCurrency } from "../../../utils/formatCurrency";
import { ModalBody, Overlay, Image, IngredientsContainer, IngredientsDetails, ProductDetails, ButtonClose, ButtonAddToCart, Price, Icon, Button } from "./styles";
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    product: Product | null;
    handleAdd: (product: Product, quantity: number) => void;
}

export function ModalProductDetails({ visible, onClose, product, handleAdd }: ModalProps) {
    const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number>(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return 1; // evita que a quantidade seja menor que 1
        });
    };

    if (!visible || !product) {
        return null;
    }

    const handleIngredientToggle = (ingredientId: string) => {
        setCheckedIngredients((prevChecked) => {
            if (prevChecked.includes(ingredientId)) {
                return prevChecked.filter(id => id !== ingredientId);
            } else {
                if (prevChecked.length < 3) {
                    return [...prevChecked, ingredientId];
                } else {
                    alert("Você não pode selecionar mais de 3 ingredientes.");
                    return prevChecked;
                }
            }
        });
    };

    function handleAddToCart() {
        handleAdd(product!, quantity);
        onClose();
    }

    return (
        <Overlay>
            <ModalBody>
                <Image>
                    <img
                        src={`http://localhost:3001/uploads/${product.imagePath}`}
                        width="100%"
                        height="280"
                        alt={product.name}
                    />
                </Image>
                <ProductDetails>
                    <div className="desciption-details">
                        <strong>{product.name}</strong>
                        <span>{product.description}</span>
                    </div>
                    <IngredientsContainer>
                        <strong>Ingredientes:</strong>
                        <ul>
                            {product.ingredients.map((ingredient) => (
                                <IngredientsDetails key={ingredient._id}>
                                    <label>{ingredient.icon}</label>
                                    <span>{ingredient.name}</span>
                                    <input
                                        type="checkbox"
                                        id={ingredient._id}
                                        checked={checkedIngredients.includes(ingredient._id)}
                                        onChange={() => handleIngredientToggle(ingredient._id)}
                                    />
                                </IngredientsDetails>
                            ))}
                        </ul>
                    </IngredientsContainer>
                </ProductDetails>
                <Price>
                    <strong>{formatCurrency(product.price * quantity)}</strong>
                    <Icon>
                        <FiMinus size={14} color="red" onClick={decrementQuantity} />
                        <span>{quantity}</span>
                        <IoMdAdd size={14} color="red" onClick={incrementQuantity} />
                    </Icon>
                </Price>
                <Button>
                    <ButtonAddToCart onClick={handleAddToCart}>Adicionar ao Carrinho</ButtonAddToCart>
                    <ButtonClose onClick={onClose}>Fechar</ButtonClose>
                </Button>
            </ModalBody>
        </Overlay>
    );
}
