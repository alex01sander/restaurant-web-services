
import styled from 'styled-components';


export const ModalOverlay = styled.div`
  display: flex;
    position: fixed;
    top: 0;
    right: 0; /* Alinha ao lado direito */
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    justify-content: flex-end; /* Alinha ao lado direito */
    align-items: center;
    /* padding-right: 20px; Espaçamento da borda direita */
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px; /* Largura do modal, ajuste conforme necessário */
    height: 100%; /* Ocupa 100% da altura do ModalOverlay */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* Adiciona scroll quando necessário */

    .button{
    background:'#808080';
    border-radius: 50%;
    width: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
        color: red;
        transform: scale(1.1);
    }
    }
`;



export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    // outros estilos
`;

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    // outros estilos
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    // outros estilos
`;

export const QuantityContainer = styled.div`
    margin-left: 8px;
    // outros estilos
`;

export const ProductDetails = styled.div`
    margin-left: 8px;
    // outros estilos
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    // outros estilos
`;

export const Summary = styled.div`
    margin-top: 16px;
    // outros estilos
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // outros estilos
`;

export const Button = styled.div`

`
export const Modal = styled.div`

`
