import * as types from "./types";

const initialState = {
    isLoggedIn: false
  };

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.LOGIN_REQ:
            return{
                ...state,
                ...action.payload,
                isLoggedIn: false,
            };
        
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isLoggedIn: true,
            };

        case types.LOGIN_FAIL:
            return{
                ...state,
                ...action.payload,
                isLoggedIn: false,
            };
        
        case types.LOGOUT:
        return{
            ...state,
            ...action.payload,
            isLoggedIn: false,
        };
        
        default:
            return state;
    }
}

export default reducer;