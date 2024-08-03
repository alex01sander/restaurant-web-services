import { Orders } from '../Orders'

// Styles
import { Container, Content } from './styles'




export function HeaderOrders(){
    return(
        <>

        <Container>
            <Content>
                <div className="page-datails">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                {/* <img src={logo} alt="WaiterApp"/> */}
            </Content>
        </Container>
        <Orders/>
        </>
    )
}
