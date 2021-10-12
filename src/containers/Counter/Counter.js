import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions"

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
                <CounterControl label="Store" clicked={()=>this.props.onStoreCounter(this.props.ctr)}></CounterControl>
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
        ctr: state.ctr.counter,
        Storedresults: state.res.results
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        //*counter related actions
        onIncrementCounter: () => dispatch({type:actionTypes.INC_COUNTER}),
        onDecrementCounter: () => dispatch({type:actionTypes.DEC_COUNTER}),
        onAddCounter: () => dispatch({type:actionTypes.ADD_COUNTER,value:10}),
        onSubtractCounter: () => dispatch({type:actionTypes.SUB_COUNTER,value:15}),

        //*result related actions
        onStoreCounter: (result) => dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT,resultElId:id})
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);