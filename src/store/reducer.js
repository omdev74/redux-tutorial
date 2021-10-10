const initialState = {
    counter:10,
    results:[]
}
const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case "INC_COUNTER":
            return{
                ...state,
                counter: state.counter + 1
            }
            
        case "DEC_COUNTER":
            return{
                ...state,
                counter: state.counter -1
            }

        case "ADD_COUNTER":
            return{
                ...state,
                counter: state.counter + action.value
            }
        
        case "SUB_COUNTER":
            return{
                ...state,
                counter: state.counter - action.value
            }
        case"STORE_RESULT":
            const date = new Date()
            const resId = date.getTime()
            console.log(resId)
            return{
                ...state,
                results: state.results.concat({id:resId,value:state.counter})
            }
        case"DELETE_RESULT":
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
export default reducer;