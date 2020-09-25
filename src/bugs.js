import React, {Component} from 'react';
import StoreContext from "./context/storeContext";
import {loadBugs} from "./store/bugs";

export class Bugs extends Component {
    static contextType = StoreContext;
    state = {
        bugs: [],
    }

    componentDidMount() {
        // console.log(this.context)
        const store = this.context;
        this.unsubscribe = store.subscribe(() => {
            const bugsInStore = store.getState().entities.bugs.list;
            if (this.state.bugs !== bugsInStore)
                this.setState({bugs: bugsInStore})
            console.log(this.state.bugs)
        })
        store.dispatch(loadBugs())
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (<ul>
            {this.state.bugs.map(m=>(
                <li key={m.id}>{m.title}</li>
            ))}
        </ul>)
    }
}


export default Bugs;
