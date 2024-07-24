import styled from "styled-components";

export const CartContainer = styled.div`
    // estilos para o container do carrinho
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
    flex-direction: row;

    img{
       width: 150px;
       border-radius: 8px;
    }

    span{
        color: black;
    }
`;

export const DescriptionCart = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10px;

`

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
    /* margin-top: 16px;
    display: flex; */
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // outros estilos
`;

export const Button = styled.button`
    border-radius: 28px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    color: #fff;
    border: none;
    margin-top: 50px;
`

export const Icon = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
