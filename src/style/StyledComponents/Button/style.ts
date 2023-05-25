import { css } from 'styled-components';
import styled from 'styled-components/macro';
import { ButtonType } from './Index';

export const AppButton = styled.button`
    margin: 5px;
    padding: 4px;
    border-radius: 4px;
    ${(props) =>
        props.type === ButtonType.DEFAULT &&
        css`
            background-color: #4a96ff;
            color: white;
        `};
    ${(props) =>
        props.type === ButtonType.EDIT &&
        css`
            background-color: coral;
            float: right;
            color: white;
        `};
    ${(props) =>
        props.type === ButtonType.DELETE &&
        css`
            background-color: #e52525;
            margin-right: 20px;
            float: right;
            color: white;
        `};
    ${(props) =>
        props.type === ButtonType.DONE &&
        css`
            background-color: #e52525;
            color: white;
        `};
    ${(props) =>
        props.type === ButtonType.LOGOUT &&
        css`
            color: white;
            background-color: black;
            float: right;
        `};
`;
