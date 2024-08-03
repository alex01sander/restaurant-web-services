import { Menu } from "../Menu";
import { CartItem } from "../../../types/CartItem";
import { ModalCartDetails } from "../ModalCartDetails";
import { Header } from "../Header";
import { Product } from "../../../Type/Product";

interface CategoriesProps {
    cartItems: CartItem[];
    handleAddToCart: (product: Product) => void;
    handleDecrement: (product: Product) => void;
    handleConfirmOrder: () => void;
    handleOpenCartModal: () => void;
    handleCloseCartModal: () => void;
    isCartModalVisible: boolean;
}

export function Categories({
    cartItems,
    handleAddToCart,
    handleDecrement,
    handleConfirmOrder,
    handleOpenCartModal,
    handleCloseCartModal,
    isCartModalVisible,
}: CategoriesProps) {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>

            <Header onOpenCartModal={handleOpenCartModal} totalQuantity={totalQuantity} />
            <ModalCartDetails
                visible={isCartModalVisible}
                onClose={handleCloseCartModal}
                cartItems={cartItems}
                handleAdd={handleAddToCart}
                handleDecrement={handleDecrement}
                handleConfirmOrder={handleConfirmOrder}
            />
            <Menu handleAdd={handleAddToCart} />
        </>
    );
}
