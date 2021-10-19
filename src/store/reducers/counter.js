import * as actionTypes from "../actions/actionTypes"
const initialState = {
    counter:10
}
const counterReducer = (state = initialState,action)=>{
    switch (action.type) {
        case actionTypes.INC_COUNTER:
           const newState = Object.assign({},state);
           newState.counter = state.counter +1;
           return newState;
            
        case actionTypes.DEC_COUNTER:
            return{
                ...state,
                counter: state.counter -1
            }

        case actionTypes.ADD_COUNTER:
            return{
                ...state,
                counter: state.counter + action.value
            }
        
        case actionTypes.SUB_COUNTER:
            return{
                ...state,
                counter: state.counter - action.value
            }

        default: return state;
    }
    
}
export default counterReducer;