import React, {Component} from 'react';
import StoreContext from "./context/storeContext";
import {loadBugs} from "./store/bugs";
import {connect} from "react-redux";

export class Bugs extends Component {
    // static contextType = StoreContext;
    state = {
        bugs: [],
    }


    componentDidMount() {
        this.props.loadBugs()
    }


    // componentDidMount() {
    //     // console.log(this.context)
    //     const store = this.context;
    //     this.unsubscribe = store.subscribe(() => {
    //         const bugsInStore = store.getState().entities.bugs.list;
    //         if (this.state.bugs !== bugsInStore)
    //             this.setState({bugs: bugsInStore})
    //         console.log(this.state.bugs)
    //     })
    //     store.dispatch(loadBugs())
    // }
    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    render() {
        return (<ul>
            {this.props.bugs.map(m => (
                <li key={m.id}>{m.title}</li>
            ))}
        </ul>)
    }
}

const mapStateToProps = state => ({
    bugs: state.entities.bugs.list
})
const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bugs)
// export default Bugs;
