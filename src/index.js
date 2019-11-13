import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import {fetchAllPeople} from "./actions/actions";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Dispatches to fetch people from the api */
store.dispatch(fetchAllPeople());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();