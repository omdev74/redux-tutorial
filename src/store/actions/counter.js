import * as actionTypes from "./actionTypes"

export const increment = ()=>{
    return{
        type:actionTypes.INC_COUNTER
    }
}
export const decrement = ()=>{
    return{
        type:actionTypes.DEC_COUNTER
    }
}
export const addCounter = (value)=>{
    return{
        type:actionTypes.ADD_COUNTER,
        value
    }
}
export const subCounter = (value)=>{
    return{
        type:actionTypes.SUB_COUNTER,
        value
    }
}