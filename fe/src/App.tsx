
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { GlobalStyles } from "./styles/GlobalStyles"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HeaderOrders } from "./components/Header/Header";

import { Home } from "./components/Home";
import { Categories } from "./components/Navigation/Categories";



export function App() {
    return (
      <>
      <BrowserRouter>
            <GlobalStyles />
            {/* <Header /> */}
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="/cardapio" element={<Categories/>}/>
                <Route path="/pedidos" element={<HeaderOrders/>}/>

            </Routes>
            {/* <Orders /> */}
            <ToastContainer position="bottom-center" />

      </BrowserRouter>
      </>
    );
  }
