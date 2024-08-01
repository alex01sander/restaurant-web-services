import { Header } from "../Navigation/Header";
import { CartItem } from "../../types/CartItem";
import { Product } from "../../Type/Product";
import { ModalCartDetails } from "../Navigation/ModalCartDetails";
import { Imagens } from "./styles";
import pedi from "../../assets/images/pedi.jpg";
import promo from "../../assets/images/promo.jpg";
import delivery from "../../assets/images/delivery.jpg";

interface HomeProps {
    totalQuantity: number;
    cartItems: CartItem[];
    handleAddToCart: (product: Product) => void;
    handleDecrement: (product: Product) => void;
    handleConfirmOrder: () => void;
    handleOpenCartModal: () => void;
    handleCloseCartModal: () => void;
    isCartModalVisible: boolean;
}

export function Home({
    totalQuantity,
    cartItems,
    handleAddToCart,
    handleDecrement,
    handleConfirmOrder,
    handleOpenCartModal,
    handleCloseCartModal,
    isCartModalVisible,
}: HomeProps) {
    return (
        <>
            <Header onOpenCartModal={handleOpenCartModal} totalQuantity={totalQuantity} />
            <Imagens>
                <img src={pedi} alt="pedi" />
                <img src={promo} alt="promo" />
                <img src={delivery} alt="delivery" />
            </Imagens>
            <ModalCartDetails
                visible={isCartModalVisible}
                onClose={handleCloseCartModal}
                cartItems={cartItems}
                handleAdd={handleAddToCart}
                handleDecrement={handleDecrement}
                handleConfirmOrder={handleConfirmOrder}
            />
        </>
    );
}
