import { NavBar } from "../NavBar/navBar";
import { CartContainer, Container, Content } from "./styled";
import logoPizza from '../../../assets/images/logoPizza.png';
import { IoMdCart } from "react-icons/io";

interface HeaderProps {
    onOpenCartModal: () => void;
}

export function Header({ onOpenCartModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoPizza} alt="WaiterApp" />
                <NavBar />
                <CartContainer>
                    <IoMdCart size={30} color="#fff" onClick={onOpenCartModal} />
                </CartContainer>
            </Content>
        </Container>
    );
}
