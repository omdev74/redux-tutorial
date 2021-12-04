import * as actionTypes from "../actions/actionTypes"
import update from "../utility";
const initialState = {
    counter:10
}
const counterReducer = (state = initialState,action)=>{
    switch (action.type) {
        case actionTypes.INC_COUNTER:
            return update(state,{counter:state.counter +1})
            
        case actionTypes.DEC_COUNTER:
            return update(state,{counter: state.counter -1})

        case actionTypes.ADD_COUNTER:
            return update(state,{counter: state.counter + action.value})
        
        case actionTypes.SUB_COUNTER:
            return update(state,{counter: state.counter - action.value})

        default: return state;
    }
    
}
export default counterReducer;