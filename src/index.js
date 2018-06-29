import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { IntlProvider } from 'react-intl';
import { HashRouter } from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <IntlProvider>
                <App />
            </IntlProvider>
        </HashRouter>
    </Provider>, document.getElementById('root'));

