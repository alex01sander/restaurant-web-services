import { Container, Content, OrderHeader, Table } from "./styles";
import { Text } from "../../components/Text";
import { TouchableOpacity } from "react-native";


interface HeaderProps{
    setSelectedTable : string;
    onCancelOrder: () => void;
}

export function Header({setSelectedTable, onCancelOrder}: HeaderProps){
    return(
        <Container>
            {!setSelectedTable && (
                <>
                    <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
                        <Text size={24} weight='700'>
                         WAITER
                        <Text size={24}>APP</Text>
                    </Text>
                </>
            )}
            {setSelectedTable && (
                <Content>
                    <OrderHeader>
                        <Text size={24} weight='700'>Pedido</Text>
                        <TouchableOpacity onPress={onCancelOrder}>
                            <Text color='#D73035' weight='700' size={14}>
                                cancelar pedido
                            </Text>
                        </TouchableOpacity>
                    </OrderHeader>

                    <Table>
                        <Text color="#666">Mesa {setSelectedTable}</Text>
                    </Table>
                </Content>
            )}
        </Container>
    )
}
