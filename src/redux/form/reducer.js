import * as types from "./types";

const initialState = {
    data : null,
    isAdded: false
  };

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADD_FORM:
            return{
                ...state,
                data : action.payload
            };
        
        case types.ADD_FORM_ERROR:
        return{
            ...state,
            data : null
        };
        
        default:
            return state;
    }
}

export default reducer;