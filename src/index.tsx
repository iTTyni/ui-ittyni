import React from 'react'
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components';
import {lightTheme} from './theme';
import { LayoutWeb } from './layout';

const rootElement = document.getElementById('root')
ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <LayoutWeb/>
    </ThemeProvider>
    , rootElement);