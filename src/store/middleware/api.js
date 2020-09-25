import axios from 'axios'
import {apiCallBegan, apiCallFail, apiCallSuccess} from "../api";

const api = ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type) return next(action)
    next(action)
    const {url, method, data, onSuccess, onError} = action.payload
    try {
        const response =await axios.request({
            baseURL: 'https://jsonplaceholder.typicode.com',
            url: url,
            method,
            data

        })
        dispatch(apiCallSuccess(response.data))
        if(onSuccess) dispatch({type: onSuccess, payload: response.data})
    } catch (e) {
        dispatch(apiCallFail(e));
        if(onError) dispatch({type: onError, payload: e});
    }

}
export default api;