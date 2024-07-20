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
    flex-direction: column;

    img{
       width: 150px;
    }

    span{
        color: black;
    }
`;

// export const Image = styled.img`
//     width: 50px;
//     height: 50px;
//     // outros estilos
// `;

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

export const Icon = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
