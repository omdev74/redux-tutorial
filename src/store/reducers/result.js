import * as actionTypes from "../actions/actionTypes"
const initialState = {
    results:[]
}
const resultReducer = (state = initialState,action)=>{
    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            const date = new Date()
            const resId = date.getTime()
            console.log(resId)
            return{
                ...state,
                results: state.results.concat({id:resId,value:action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter((result)=> result.id !== action.resultElId)
            return{
                ...state,
                results: updatedArray
            }  

        default: return state;
    }
    
}
export default resultReducer;