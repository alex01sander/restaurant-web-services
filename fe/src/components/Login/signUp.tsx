// SignUpForm.tsx

import { useForm, SubmitHandler } from "react-hook-form";
import {  FormWrapper, Title, Form, Input, Button, ErrorMessage, Overlay } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";


interface SigUpProps{
    onRequestClose: () => void;
}

interface FormInputs {
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    cep: string;
    rua: string;
    numero: string;
    pontoReferencia: string;

}

export function SignUp({onRequestClose} : SigUpProps) {
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            if (data.senha !== data.confirmarSenha) {
                setError("confirmarSenha", { type: "manual", message: "As senhas não coincidem" });
                return;
            }

            // Cria um novo usuário com email e senha
            await createUserWithEmailAndPassword(auth, data.email, data.senha);
            console.log("Usuário criado com sucesso:", data);

            onRequestClose()
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error.message);
            setError("senha", { type: "manual", message: error.message });
        }
    };

    const senha = watch("senha");

    return (
     <>
        <Overlay>

            <FormWrapper>
                <span onClick={onRequestClose}>X</span>
                <Title>Cadastro</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register("nome", { required: "Nome é obrigatório" })}
                        type="text"
                        placeholder="Nome"
                    />
                    {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

                    <Input
                        {...register("cpf",)}
                        type="text"
                        placeholder="CPF (opcional)"
                    />
                    {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}

                    <Input
                        {...register("dataNascimento", )}
                        type="date"
                        placeholder="Data de Nascimento (opcional)"
                    />
                    {errors.dataNascimento && <ErrorMessage>{errors.dataNascimento.message}</ErrorMessage>}

                    <Input
                        {...register("telefone", { required: "Telefone é obrigatório" })}
                        type="text"
                        placeholder="Telefone"
                    />
                    {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}

                    <Input
                        {...register("email", {
                            required: "Email é obrigatório",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" }
                        })}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <Input
                        {...register("senha", { required: "Senha é obrigatória" })}
                        type="password"
                        placeholder="Crie sua senha"
                    />
                    {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}

                    <Input
                        {...register("confirmarSenha", {
                            validate: value => value === senha || "As senhas não coincidem"
                        })}
                        type="password"
                        placeholder="Confirme sua senha"
                    />
                    {errors.confirmarSenha && <ErrorMessage>{errors.confirmarSenha.message}</ErrorMessage>}

                    <Input
                        {...register("cep", { required: "CEP é obrigatório" })}
                        type="text"
                        placeholder="CEP"
                    />
                    {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}

                    <Input
                        {...register("rua", { required: "Nome da Rua é obrigatório" })}
                        type="text"
                        placeholder="Nome da Rua"
                    />
                    {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}

                    <Input
                        {...register("numero", { required: "Número da Casa é obrigatório" })}
                        type="text"
                        placeholder="Número da Casa"
                    />
                    {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}

                    <Input
                        {...register("pontoReferencia")}
                        type="text"
                        placeholder="Ponto de Referência"
                    />

                    <Button type="submit">Cadastrar</Button>
                </Form>
            </FormWrapper>

        </Overlay>

     </>

    );
};
