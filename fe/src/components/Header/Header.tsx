import logo from '../../assets/images/logo.svg'

// Styles
import { Container, Content } from './styles'




export function Header(){
    return(
        <Container>
            <Content>
                <div className="page-datails">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                <img src={logo} alt="WaiterApp"/>
            </Content>
        </Container>
    )
}
