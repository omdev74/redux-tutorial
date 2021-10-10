const initialState = {
    counter:10
}
const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case "INC_COUNTER":
            return{
                counter: state.counter + 1
            }
            
        case "DEC_COUNTER":
            return{
                counter: state.counter -1
            }

        case "ADD_COUNTER":
            return{
                counter: state.counter + action.value
            }
        
        case "SUB_COUNTER":
            return{
                counter: state.counter - action.value
            }
        default: return state;
    }
    
}
export default reducer