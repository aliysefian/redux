import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import configureStore from "./store/ConfigureStore";
import {bugAdded, bugRemove, loadBugs} from "./store/bugs";
import {projectAdded} from "./store/project";
import {apiCallBegan, apiCallFail} from "./store/api";

// const store = configureStore();
// store.subscribe(() => {
//     console.log("change", store.getState(
//
//     ))
// })
// store.dispatch(loadBugs())
// store.dispatch(apiCallBegan({
//         url: '/posts',
//         method: 'get',
//         data: {},
//         onSuccess: 'bugs/bugRecived',
//         // onError: apiCallFail.type
//     }
// ))
// store.dispatch({
//     type:apiCallBegan.type,
//     payload:{
//         url:'/posts',
//         method:'get',
//         data:{},
//         onSuccess:'bugRecived',
//         onError:'apiRequestFail'
//     }
// })
// store.dispatch(bugAdded({description: "ali"}))
// store.dispatch((dispatch,getState) => {
//     dispatch({type: "bugResivrd", bugs: [1, 2, 3]})
//     console.log(getState)
// })
// store.dispatch(bugAdded({description: "alirrrrrrr"}))
// store.dispatch(projectAdded({description: "alirrrrrrr"}))
// store.dispatch(bugRemove({id:1}))
// store.dispatch(bugRemove({id:1}))

// console.log(store.getState())
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
