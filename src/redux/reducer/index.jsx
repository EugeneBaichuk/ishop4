const initialState = {
    summ: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_SUMM": 
            return {...state, summ: state.summ + action.payload}
        default:
            return state
    }
}

export default reducer;