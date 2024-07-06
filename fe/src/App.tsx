// import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Navigation/Home/home";
// import { Orders } from "./components/Orders"
import { GlobalStyles } from "./styles/GlobalStyles"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
    return (
      <>
      <BrowserRouter>
            <GlobalStyles />
            {/* <Header /> */}
            <Home/>
            {/* <Orders /> */}
            <ToastContainer position="bottom-center" />

      </BrowserRouter>
      </>
    );
  }
