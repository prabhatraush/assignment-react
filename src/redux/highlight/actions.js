import * as types from './types';

export const enableHighlight = () => (dispatch) => {
    dispatch({
        type: types.ENABLE_HIGHLIGHT
    })
}

export const disableHighlight = () => (dispatch) => {
    dispatch({
        type: types.DISABLE_HIGHLIGHT
    })
}