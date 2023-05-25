import styled from 'styled-components';

export const TodoContainer = styled.div`
    background-color: #ad7b40;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TodoAppDiv = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 50%;
    height: 100%;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
export const AppDivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1050px) {
        flex-direction: column;
    }
`;
export const Table = styled.table`
    width: 100%;
    margin-left: 10px;
    border-radius: 10px;
    border: solid 1px;
`;
export const AppDiv = styled.div`
    display: inline-block;
    box-sizing: border-box;
`;
export const AppDivBl = styled.div`
    display: block;
`;
export const AppH2 = styled.h2`
    background-color: #3e9ced;
`;
export const AppTitle = styled.h2`
    background-color: #a3cca9;
    margin-top: 50px;
`;
export const Input = styled.input`
    width: 100%;
`;
export const AppLi = styled.li`
    list-style: none;
`;
export const DivSeacrch = styled.div``;
