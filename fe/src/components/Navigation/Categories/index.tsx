import { useState, useEffect } from "react";
import { Menu } from "../Menu";
import { CartItem } from "../../../types/CartItem";
import { ModalCartDetails } from "../ModalCartDetails";
import { Header } from "../Header";
import { Product } from "../../../Type/Product";

export function Categories() {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    function handleAddToCart(product: Product, quantity: number = 1) {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.product._id === product._id);
            if (itemIndex !== -1) {
                const newItems = [...prevItems];
                newItems[itemIndex].quantity += quantity;
                return newItems;
            }
            return [...prevItems, { quantity, product }];
        });
    }

    function handleDecrement(product: Product) {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.product._id === product._id);
            if (itemIndex !== -1) {
                const newItems = [...prevItems];
                if (newItems[itemIndex].quantity > 1) {
                    newItems[itemIndex].quantity -= 1;
                    return newItems;
                }
                return newItems.filter(item => item.product._id !== product._id);
            }
            return prevItems;
        });
    }

    function handleConfirmOrder() {
        console.log("Pedido confirmado!");
        setIsCartModalVisible(false);
        setCartItems([]);
    }

    function handleOpenCartModal() {
        setIsCartModalVisible(true);
    }

    function handleCloseCartModal() {
        setIsCartModalVisible(false);
    }

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
