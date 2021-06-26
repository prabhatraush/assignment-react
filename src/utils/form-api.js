import axios from 'axios'

const formApi  = axios.create({
  baseURL: process.env.REACT_APP_DUMMY_URL_FORM,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default formApi