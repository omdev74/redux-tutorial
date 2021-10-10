import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15 " clicked={this.props.onSubtractCounter}  />
                <hr></hr>
                <CounterControl label="Store" clicked={this.props.onStoreCounter}></CounterControl>
                <ul>
                    {this.props.Storedresults.map(strResult=>(
                        <li key={strResult.id}onClick={()=>this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>)
                        )}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr: state.counter,
        Storedresults: state.results
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onIncrementCounter: () => dispatch({type:"INC_COUNTER"}),
        onDecrementCounter: () => dispatch({type:"DEC_COUNTER"}),
        onAddCounter: () => dispatch({type:"ADD_COUNTER",value:10}),
        onSubtractCounter: () => dispatch({type:"SUB_COUNTER",value:15}),

        onStoreCounter: () => dispatch({type:"STORE_RESULT"}),
        onDeleteResult: (id) => dispatch({type:"DELETE_RESULT",resultElId:id})
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);