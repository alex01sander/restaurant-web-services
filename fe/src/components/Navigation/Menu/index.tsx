import  { useState } from "react";
import products from "../../../mocks/products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { FlatListWrapper, ProductContent, ProductDetails } from "./styles";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ModalProductDetails } from "../ModalProductDetails";
import { Product } from "../../../Type/Product";

interface MenuProps {
    handleAdd: (product : Product) => void;
}

export function Menu({handleAdd}: MenuProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);


    function handleOpenModal(product: Product) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
    }



    return (
        <>

            {isModalVisible && (
                <ModalProductDetails
                    visible={isModalVisible}
                    onClose={handleCloseModal}
                    product={selectedProduct}
                    handleAdd={handleAdd}
                />
            )}
            <FlatListWrapper>
                {products.map((product) => (
                    <ProductDetails key={product._id}>
                        <img
                            src={`http://localhost:3001/uploads/${product.imagePath}`}
                            alt={product.name}
                            width="300"
                            height="150"
                        />
                        <ProductContent>
                            <strong>{product.name}</strong>
                            <span color="#666">{product.description}</span>
                            <strong>{formatCurrency(product.price)}</strong>
                        </ProductContent>
                        <IoIosAddCircleOutline
                            size={24}
                            color="red"
                            onClick={() => handleOpenModal(product)}
                            className="icon-details"
                        />
                    </ProductDetails>
                ))}
            </FlatListWrapper>
        </>
    );
}
