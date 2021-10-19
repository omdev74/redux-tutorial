import * as actionTypes from "./actionTypes"


//* actual action creator
export const saveResult = (result)=>{
    //* sync code
    const updatedResult = result * 2
    return{
        type:actionTypes.STORE_RESULT,
        // result
        result:updatedResult
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
        type:actionTypes.DELETE_RESULT,
        resultElId
    }
}