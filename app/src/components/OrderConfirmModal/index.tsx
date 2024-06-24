import { Modal } from "react-native";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../../components/Text";


interface OrderConfirmModalPropos{
    visible: boolean;
    onOk: () => void;

}

export function OrderConfirmModal({visible, onOk}:OrderConfirmModalPropos ){
return(
    <Modal
        visible={visible}
        animationType="fade"
    >
    <Container>
        <CheckCircle/>
        <Text size={20} weight='700'color='#fff' style={{marginTop: 12}}>Pedido confirmado</Text>
        <Text color='#fff' opacity={0.9} style={{marginTop:4}}>O pedido já entrou na fila de produção!</Text>

        <OkButton onPress={onOk}>
            <Text color={'#d73035'} weight='700'>Ok</Text>
        </OkButton>
    </Container>
    </Modal>
)
}
