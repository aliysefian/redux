import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bugs from "./bugs";
import StoreContext from './context/storeContext'
import ConfigureStore from "./store/ConfigureStore";
import {Provider} from'react-redux'

const store=ConfigureStore()
function App() {
    return (
        // <StoreContext.Provider value={store}>
        //     <Bugs/>
        //
        // </StoreContext.Provider>
        <Provider store={store}>
            <Bugs/>
        </Provider>
    );
}

export default App;
