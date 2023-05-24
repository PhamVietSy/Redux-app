import { createGlobalStyle } from 'styled-components';

const GlobaStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif !important;
    }
    html{
            font-size:62.5%;
            height: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            line-height:1.6rem;
            font-weight: 500;
        }
    
`;
export default GlobaStyle;
