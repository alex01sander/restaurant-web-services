import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: auto;
    padding-right: 24px;
    gap: 20px;

`;

export const CategoryContainer = styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: ${({ isSelected }) => (isSelected ? '#D73035' : '#fff')};
    color: ${({ isSelected }) => (isSelected ? '#fff' : 'black')};
    border-radius: 100%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 8px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1)

`;

export const Icon = styled.div`
    margin-right: 8px;

`;


