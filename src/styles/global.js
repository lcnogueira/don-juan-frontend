import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import colors from './colors';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #FBFBFB;
    color: ${colors.primary};
    font-family: 'Helvetica', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root{
    height: 100%;
  }

  input, button {
    font-family: 'Helvetica', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
