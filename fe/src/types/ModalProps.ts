import { Product } from "../Type/Product";
import { CartItem } from "./CartItem";


export interface CartProps {
    cartItems: CartItem[];
    onAdd: (product: Product) => void;
    onDecrement: (product: Product) => void;
    onConfirmOrder: () => void;
    selectedTable: string;
}

export interface ModalProps {
    visible: boolean;
    onClose: () => void;
    cartProps: CartProps;
}
