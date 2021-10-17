export const INC_COUNTER = "INC_COUNTER"
export const DEC_COUNTER = "DEC_COUNTER"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUB_COUNTER = "SUB_COUNTER"

export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

export const increment = ()=>{
    return{
        type:INC_COUNTER
    }
}
export const decrement = ()=>{
    return{
        type:DEC_COUNTER
    }
}
export const addCounter = (value)=>{
    return{
        type:ADD_COUNTER,
        value
    }
}
export const subCounter = (value)=>{
    return{
        type:SUB_COUNTER,
        value
    }
}

//* actual action creator
export const saveResult = (result)=>{
    //* sync code
    return{
        type:STORE_RESULT,
        result
    }
}

export const storeResult = (result)=>{
    //! dispatch automatically provided by thunk
    return (dispatch)=>{
        //* async code
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000);
    }
    
}
export const deleteResult = (resultElId)=>{
    return{
        type:DELETE_RESULT,
        resultElId
    }
}