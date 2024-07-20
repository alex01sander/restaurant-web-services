import { ModalContent, ModalOverlay } from "./styles";
import { Cart } from "../Cart";
import { CartItem } from "../../../types/CartItem";
import { Product } from "../../../Type/Product";


interface ModalCartDetailsProps {
    visible: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    handleAdd: (product: Product) => void;
    handleDecrement: (product: Product) => void;
    handleConfirmOrder: () => void;
}

export function ModalCartDetails({ visible, onClose, cartItems, handleAdd, handleDecrement, handleConfirmOrder }: ModalCartDetailsProps) {
    if (!visible) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <button className="button" onClick={onClose}>X</button>
                <Cart
                    cartItems={cartItems}
                    onAdd={handleAdd}
                    onDecrement={handleDecrement}
                    onConfirmOrder={handleConfirmOrder}
                />
            </ModalContent>
        </ModalOverlay>
    );
}
