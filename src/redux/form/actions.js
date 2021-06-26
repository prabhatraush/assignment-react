import * as types from './types';
import formApi from '../../utils/form-api';

export const addForm = (name, description, fee, outdate) => dispatch => {

        const postData = {
           name: name,
           description: description,
           fee: fee,
           publish_date: outdate
          };

        formApi.post('/form', 
        postData
        )
        .then(response => {
            console.log(response);
            dispatch({
                type: types.ADD_FORM,
                payload: {
                    data: response.data,
                    isAdded: true
                }
            })

        })
        .catch(error => {
            dispatch({
                type: types.ADD_FORM_ERROR,
                payload: {
                    error: error,
                    isAdded: false
                }
            })
           
        });

}


