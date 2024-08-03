import { useState } from "react";
import { NavBar } from "../NavBar/navBar";
import { CartContainer, Container, Content, CartBadge, Login, Register, SignUpContainer, ContentConateiner } from "./styled";
import logoPizza from '../../../assets/images/logoPizza.png';
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { SignIn } from "../../Login/signIn";
import { SignUp } from "../../Login/signUp";

interface HeaderProps {
    onOpenCartModal: () => void;
    totalQuantity: number;
}

export function Header({ onOpenCartModal, totalQuantity }: HeaderProps) {
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);

    function handleOpenSignInModal() {
        setIsSignInVisible(true);
        setIsSignUpVisible(false);
    }

    function handleOpenSignUpModal() {
        setIsSignUpVisible(true);
        setIsSignInVisible(false);
    }

    function handleCloseModal() {
        setIsSignInVisible(false);
        setIsSignUpVisible(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoPizza} alt="WaiterApp" />
                <NavBar />
                <Login>
                    <FaUserAlt size={20} color="#ffff" />
                    <ContentConateiner>
                        <SignUpContainer>
                            <span>Faça seu <b onClick={handleOpenSignInModal}>Login</b> ou </span>
                        </SignUpContainer>
                        <Register>
                            <span>crie seu <b onClick={handleOpenSignUpModal}>Cadastro</b></span>
                        </Register>
                    </ContentConateiner>
                </Login>
                <CartContainer onClick={onOpenCartModal}>
                    <IoMdCart size={30} color="#fff" />
                    {totalQuantity > 0 && <CartBadge>{totalQuantity}</CartBadge>}
                </CartContainer>

                {isSignInVisible && <SignIn onRequestClose={handleCloseModal} />}
                {isSignUpVisible && <SignUp onRequestClose={handleCloseModal} />}
            </Content>
        </Container>
    );
}
