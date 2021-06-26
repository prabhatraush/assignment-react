import * as types from "./types";

const initialState = {
    isHighlight: false
  };

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ENABLE_HIGHLIGHT:
            return{
                ...state,
                isHighlight: true,
            };
        
        case types.DISABLE_HIGHLIGHT:
            return{
                ...state,
                isHighlight: false,
            };
        
        default:
            return state;
    }
}

export default reducer;