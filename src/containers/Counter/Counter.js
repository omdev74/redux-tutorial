import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15 " clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr: state.counter
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onIncrementCounter: () => dispatch({type:"INC_COUNTER"}),
        onDecrementCounter: () => dispatch({type:"DEC_COUNTER"}),
        onAddCounter: () => dispatch({type:"ADD_COUNTER",value:10}),
        onSubtractCounter: () => dispatch({type:"SUB_COUNTER",value:15}),
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);