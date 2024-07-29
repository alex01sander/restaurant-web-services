import styled from "styled-components";

export const Container = styled.header`
    background: #D73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 200px;
    }

    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
        }

        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;

// export const CartContainer = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 10px;
// `;

export const FlatListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .cartContent {
        display: flex;
        gap: 10px;
    }

    span {
        color: #fff;
    }
`;
export const CartContainer = styled.div`
    position: relative;
    cursor: pointer;
    /* outros estilos */
`;

export const CartBadge = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
`;
