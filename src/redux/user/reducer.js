import * as types from "./types";

const initialState = {
    isLoggedIn: false,
    err: false
  };

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isLoggedIn: true,
                err: false
            };

        case types.LOGIN_FAIL:
            return{
                ...state,
                ...action.payload,
                isLoggedIn: false,
                err: true
            };
        
        case types.LOGOUT:
        return{
            ...state,
            ...action.payload,
            isLoggedIn: false,
            err: false
        };
        
        default:
            return state;
    }
}

export default reducer;