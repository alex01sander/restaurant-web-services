import { useState } from "react";
import { Menu } from "../Menu";
import { CartItem } from "../../../types/CartItem";
import { ModalCartDetails } from "../ModalCartDetails";

import { Header } from "../Header";
import { Product } from "../../../Type/Product";

export function Categories() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    function handleAddToCart(product: Product) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                cartItem => cartItem.product._id === product._id
            );

            if (itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCartItems = [...prevState];
            const item = newCartItems[itemIndex];
            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
            };

            return newCartItems;
        });
    }

    function handleDecrement(product: Product) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                cartItem => cartItem.product._id === product._id
            );

            const item = prevState[itemIndex];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);
                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
            };

            return newCartItems;
        });
    }

    function handleConfirmOrder() {
        console.log("Pedido confirmado!");
        setIsCartModalVisible(false);
    }

    function handleOpenCartModal() {
        setIsCartModalVisible(true);
    }

    function handleCloseCartModal() {
        setIsCartModalVisible(false);
    }

    return (
        <>
            <Header onOpenCartModal={handleOpenCartModal} />
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
