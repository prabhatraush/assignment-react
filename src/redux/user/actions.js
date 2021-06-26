import * as types from './types';
import api from '../../utils/api';

export const getLogin = (email, password) => dispatch => {
        dispatch({
            type: types.LOGIN_REQ,
            payload: {
                isLoggedIn : false
            }
        })

        console.log(email, password);
        const request = {
            query: `
              mutation Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                  token
                }
              }
            `,
            variables: {
              email: email,
              password: password
            }
          };

        api.post('/graphql', 
        request
        )
        .then(({data}) => {
            console.log(data.errors);
            if(data.errors){
                dispatch({
                    type: types.LOGIN_FAIL,
                    payload: {
                        isLoggedIn : false
                    }
                })
            }

            if(data['data'].login)
                {
                    localStorage.setItem("token", data['data'].login.token )
                    dispatch({
                        type: types.LOGIN_SUCCESS,
                        payload: {
                            isLoggedIn : true
                        }
                    })
                }

        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: types.LOGIN_FAIL,
                payload: {
                    isLoggedIn : false
                }
            })
        });

}

export const isAlreadyIn = () => (dispatch) =>{
    if(localStorage.getItem('token'))
    {
        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: {
                isLoggedIn : true
            }
        })
    }else{
        dispatch({
            type: types.LOGIN_FAIL,
            payload: {
                isLoggedIn : false
            }
        })
    }
}

export const loggedOut = () => (dispatch) =>{
    localStorage.removeItem('token');
    dispatch({
        type: types.LOGOUT,
        payload: {
            isLoggedIn : false
        }
    })
}

