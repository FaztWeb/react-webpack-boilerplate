import React from 'react';
import { render } from 'react-dom'

import App from './components/App';

const title = 'Webpack React Setup';
console.log(title);

render(
    <div>
        <h1>Hello React & Webpack</h1>
        <App />
    </div>,
    document.getElementById('app')
);