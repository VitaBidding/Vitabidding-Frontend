import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store} from './redux/store'
import { Provider } from 'react-redux'


function Root () {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
};

export default Root;