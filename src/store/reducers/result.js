import * as actionTypes from "../actions/actionTypes"
import update from "../utility"
const initialState = {
    results:[]
}

const deleteResult = (state,action)=>{
    const updatedArray = state.results.filter((result)=> result.id !== action.resultElId)
            return update(state,{results: updatedArray})

}

const resultReducer = (state = initialState,action)=>{
    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            const date = new Date()
            const resId = date.getTime()
            console.log(resId)
            return update(state,{results: state.results.concat({id:resId,value:action.result})})

        case actionTypes.DELETE_RESULT: return deleteResult(state,action);
            

        default: return state;
    }
    
}
export default resultReducer;