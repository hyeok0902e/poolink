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
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();