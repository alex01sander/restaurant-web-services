import { CartItem } from "../types/CartItem";

export function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);
}
