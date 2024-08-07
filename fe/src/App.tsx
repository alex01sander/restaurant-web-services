import{ useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import { CartItem } from "./types/CartItem";
import { Categories } from "./components/Navigation/Categories";
import { Home } from "./components/Home";
import { HeaderOrders } from "./components/HeaderOrders";
import { Product } from "./Type/Product";

export function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    function handleAddToCart(product: Product, quantity: number = 1, selectedIngredients: string[] = []) {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.product._id === product._id);
            if (itemIndex !== -1) {
                const existingItem = prevItems[itemIndex];
                const combinedIngredients = [...existingItem.selectedIngredients, ...selectedIngredients];

                if (combinedIngredients.length <= 3) {
                    const newItems = [...prevItems];
                    newItems[itemIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity + quantity,
                        selectedIngredients: Array.from(new Set(combinedIngredients))
                    };
                    return newItems;
                } else if (existingItem.selectedIngredients.length < 3) {
                    const remainingSpace = 3 - existingItem.selectedIngredients.length;
                    const newIngredients = selectedIngredients.slice(0, remainingSpace);
                    const newItems = [...prevItems];
                    newItems[itemIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity + quantity,
                        selectedIngredients: Array.from(new Set([...existingItem.selectedIngredients, ...newIngredients]))
                    };
                    const extraIngredients = selectedIngredients.slice(remainingSpace);
                    if (extraIngredients.length > 0) {
                        newItems.push({
                            product,
                            quantity: 1,
                            selectedIngredients: extraIngredients
                        });
                    }
                    return newItems;
                } else {
                    return [...prevItems, { quantity, product, selectedIngredients }];
                }
            }
            return [...prevItems, { quantity, product, selectedIngredients }];
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
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            totalQuantity={totalQuantity}
                            cartItems={cartItems}
                            handleAddToCart={handleAddToCart}
                            handleDecrement={handleDecrement}
                            handleConfirmOrder={handleConfirmOrder}
                            handleOpenCartModal={handleOpenCartModal}
                            isCartModalVisible={isCartModalVisible}
                            handleCloseCartModal={handleCloseCartModal}
                        />
                    }
                />
                <Route
                    path="/cardapio"
                    element={
                        <Categories
                            cartItems={cartItems}
                            handleAddToCart={handleAddToCart}
                            handleDecrement={handleDecrement}
                            handleConfirmOrder={handleConfirmOrder}
                            handleOpenCartModal={handleOpenCartModal}
                            isCartModalVisible={isCartModalVisible}
                            handleCloseCartModal={handleCloseCartModal}
                        />
                    }
                />
                 <Route path="/pedidos" element={<HeaderOrders/>}/>
            </Routes>
            <ToastContainer position="bottom-center" />
        </BrowserRouter>
    );
}
