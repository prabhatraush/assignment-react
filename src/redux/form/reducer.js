import * as types from "./types";

const initialState = {
    data : null,
    isAdded: false,
    err: false,
  };

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADD_FORM:
            return{
                ...state,
                data : action.payload,
                isAdded: true,
                err: false
            };
        
        case types.ADD_FORM_ERROR:
        return{
            ...state,
            data : null,
            isAdded: false,
            err: true
        };
        
        default:
            return state;
    }
}

export default reducer;