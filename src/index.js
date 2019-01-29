import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import store from './Store'
import ControlPanel from './views/ControlPanel'
import Provider from './Provider'

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
