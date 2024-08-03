
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Overlay, ModalContainer, Title, Form, Input, Button } from "./styles";
import { auth } from "../../utils/firebase";

interface SignUpProps {
    onRequestClose: () => void;
}

interface SignUpFormInputs {
    email: string;
    password: string;
}

export function SignIn({ onRequestClose }: SignUpProps) {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<SignUpFormInputs>();

    const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            onRequestClose(); // Fecha o modal após cadastro bem-sucedido
        } catch (error: any) {
            setError("password", { type: "manual", message: error.message });
        }
    };

    return (
        <Overlay>
            <ModalContainer>
                <span onClick={onRequestClose}>X</span>
                <Title>Entrar</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                    <Input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email é obrigatório" })}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    <Input
                        type="password"
                        placeholder="Senha"
                        {...register("password", { required: "Senha é obrigatória" })}
                    />
                    <Button type="submit">Cadastrar</Button>
                    <span>Esqueceu a senha?</span>
                </Form>
            </ModalContainer>
        </Overlay>
    );
}
