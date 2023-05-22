import styled, { css } from "styled-components";


export const AppButton = styled.button`
    margin: 5px;
    border-radius: 4px;
    ${props => props.type === ButtonType.DEFAULT && css`
        background-color: #4CAF50;
    `};
    ${props =>props.type === ButtonType.EDIT && css`
        background-color: #008CBA;
        float: right;
       
    `};
    ${props => props.type === ButtonType.DELETE && css`
        background-color: red;
        margin-right: 20px;
        float: right;
      
    `};
    ${props => props.type === ButtonType.DONE && css`
        background-color: #fbe041c7;#f63a5d
    `};
    ${props => props.type === ButtonType.CANCEL && css`
        background-color: #f63a5d;
    `};
`;
export const ButtonType = {
    DEFAULT: 'DEFAULT',
    EDIT:'EDIT',
    DELETE:'DELETE',
    DONE:'DONE',
    CANCEL:'CANCEL'
}
export const Button = ({...rest}) => {
    return <AppButton {...rest}></AppButton>
}