import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

export default (
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
        </div>
    </BrowserRouter>
);
