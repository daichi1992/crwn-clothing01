import CartActionTypes from './cart.'

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.: 
            return {
                ...state, 
                hidden: !state.hidden
            }
        default: 
            return state; 
    }
}