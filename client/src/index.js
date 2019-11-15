// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, compose, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import * as serviceWorker from './serviceWorker';

// import reducer from './reducers/auth';
// import App from './App';

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(reducer, composeEnhances(
//   applyMiddleware(thunk)
// ));

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

// ReactDOM.render(app, document.getElementById('root'));

// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();