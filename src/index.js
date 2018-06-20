import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { IntlProvider } from 'react-intl';


ReactDOM.render(
    <Provider store={store}>
        <IntlProvider>
            <App />
        </IntlProvider>
    </Provider>, document.getElementById('root'));

