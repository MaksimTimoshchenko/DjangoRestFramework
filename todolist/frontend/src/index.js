import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('TODOListRoot');
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, container
)
