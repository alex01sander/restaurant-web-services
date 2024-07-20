import styled from 'styled-components';

export const FlatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  /* padding: 0 24px; */
`;

export const ProductDetails = styled.div`
    display: flex;
    background: #fff;
    margin: 30px 20px;
    align-items: center;
    width: 80%;
    max-width: 800px;
    justify-content: space-between;
    border:none;

    img {
        border-radius: 8px;
    }

    .icon-details{
        cursor:pointer;
    }
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
    gap: 5px;
`;

export const Icon = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
