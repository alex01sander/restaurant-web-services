import { Modal, Platform, TouchableOpacity } from "react-native";
import { Text } from "../../components/Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
    const [table, setTable] = useState('');

    function handleSave() {
        setTable('')
        onSave(table);
        onClose();
    }

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <Header>
                        <Text weight='700'>Central de pedidos</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color="#666" />
                        </TouchableOpacity>
                    </Header>

                    <Form>
                        <Input
                            placeholder='Número da mesa'
                            placeholderTextColor='#666'
                            keyboardType='number-pad'
                            onChangeText={setTable}
                            value={table}
                        />
                        <Button onPress={handleSave} disabled={table.length === 0}>Salvar</Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
