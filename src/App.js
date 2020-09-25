import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bugs from "./bugs";
import StoreContext from './context/storeContext'
import ConfigureStore from "./store/ConfigureStore";

const store=ConfigureStore()
function App() {
    return (
        <StoreContext.Provider value={store}>
            <Bugs/>

        </StoreContext.Provider>
    );
}

export default App;
