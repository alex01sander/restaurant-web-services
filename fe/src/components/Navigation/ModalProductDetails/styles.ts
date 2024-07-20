import { styled } from "styled-components";

export const Overlay = styled.div`
    left: 0px;
    top: 0px;
    background: rgba(0, 0,0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalBody = styled.div`
    width: 300px;
    background: #fff;
    border-radius: 8px;
    /* padding: 32px; */
    width: 30%;
    height:80%;
`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;

   .desciption-details{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 20px;
        gap: 10px;
   }

`


export const Image = styled.div`
    display: flex;
    /* width:100%; */

    img{
        width:100%;
        border-radius: 8px;
    }

`

export const IngredientsContainer = styled.div`
    display: flex;
    flex-direction: column;





`



export const IngredientsDetails = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border: 1px solid rgba(204, 204, 204, 0.3);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 4px;





    input {

        /* margin-left: 100px; */
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 1.2em;
        height: 1.2em;
        border: 1px solid #ccc;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        outline: none;

        &:checked {
            background-color: red;

            &:checked::before {
                content: '\\2713';
                font-size: 0.8em;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            }
        }
    }
`;

export const ButtonClose = styled.button`
    border: none;
    border-radius: 28px;
    font-size: 14px;
    padding: 4px 8px;


`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top:10px;
`

export const ButtonAddToCart = styled.button`
    border-radius: 28px;
    padding: 4px 8px;
    align-items: center;
    justify-content: center;
    background: red;
    color: #fff;
    border: none;

`

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top:10px;



`

export const Icon = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
