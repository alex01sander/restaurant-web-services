import { NavBar } from "../NavBar/navBar";
import { CartContainer, Container, Content, CartBadge } from "./styled";
import logoPizza from '../../../assets/images/logoPizza.png';
import { IoMdCart } from "react-icons/io";

interface HeaderProps {
    onOpenCartModal: () => void;
    totalQuantity: number;
}

export function Header({ onOpenCartModal, totalQuantity }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoPizza} alt="WaiterApp" />
                <NavBar />
                <CartContainer onClick={onOpenCartModal}>
                    <IoMdCart size={30} color="#fff" />
                    {totalQuantity > 0 && <CartBadge>{totalQuantity}</CartBadge>}
                </CartContainer>
            </Content>
        </Container>
    );
}
