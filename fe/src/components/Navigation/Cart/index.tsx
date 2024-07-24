import { Product } from "../../../Type/Product";
import { CartItem } from "../../../types/CartItem";
import { Item, ProductContainer, Summary, TotalContainer, Button, Icon, DescriptionCart } from "./styles"; // Certifique-se de importar os estilos corretos
import { formatCurrency } from "../../../utils/formatCurrency"; // Assumindo que você tem uma função para formatar moeda
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { calculateTotal } from "../../../utils/calculator";

interface CartProps {
    cartItems: CartItem[];
    onAdd: (product: Product) => void;
    onDecrement: (product: Product) => void;
    onConfirmOrder: () => void;


}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder }: CartProps) {
    const total = calculateTotal(cartItems)
    return (
        <div>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((cartItem) => (
                        <Item key={cartItem.product._id}>
                            <ProductContainer>
                                <img
                                    src={`http://localhost:3001/uploads/${cartItem.product.imagePath}`}
                                    alt={cartItem.product.name}

                                />
                                <DescriptionCart>
                                    <strong>{cartItem.product.name}</strong>
                                    <span>{cartItem.quantity}x</span>
                                    <strong>{formatCurrency(cartItem.product.price)}</strong>
                                <Icon>
                                    <FiMinus  onClick={() => onDecrement(cartItem.product)}/>
                                        <span>{cartItem.quantity}</span>
                                    <IoMdAdd onClick={() => onAdd(cartItem.product)}/>
                                </Icon>
                                </DescriptionCart>

                            </ProductContainer>
                        </Item>
                    ))}
                    <Summary>
                        <TotalContainer>
                            <span>Total</span>

                            <strong>{formatCurrency(total)}</strong>
                        </TotalContainer>
                    </Summary>
                    <Button onClick={onConfirmOrder}>Confirmar pedido</Button>
                </>
            ) : (
                <span>Seu carrinho está vazio</span>
            )}
        </div>
    );
}
