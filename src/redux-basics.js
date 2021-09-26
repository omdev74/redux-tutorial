const redux = require("redux")
const createStore = redux.createStore;

const initialState = {
    counter:0,

}
//* reducer
//! it is the only thing that will update the state
const rootReducer = (state = initialState,action)=>{
    return state;
};

//* store
const store = createStore(rootReducer);
console.log(store.getState())



//* dispatching action


//* subscription

