import { Header } from "../Navigation/Header";
import { ModalCartDetails } from "../Navigation/ModalCartDetails";
import { Imagens } from "./styles";
import pedi from "../../assets/images/pedi.jpg"
import promo from "../../assets/images/promo.jpg"
import delivery from "../../assets/images/delivery.jpg"
import { CartItem } from "../../types/CartItem";
import { Product } from "../../Type/Product";

interface HomeProps {
    totalQuantity: number;
    cartItems: CartItem[];
    handleAddToCart: (product: Product, quantity?: number, selectedIngredients?: string[]) => void;
    handleDecrement: (product: Product) => void;
    handleConfirmOrder: () => void;
    isCartModalVisible: boolean;
    handleOpenCartModal: () => void;
    handleCloseCartModal: () => void;
}

export function Home({
    totalQuantity,
    cartItems,
    handleAddToCart,
    handleDecrement,
    handleConfirmOrder,
    isCartModalVisible,
    handleOpenCartModal,
    handleCloseCartModal
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
