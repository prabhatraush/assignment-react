import axios from "axios";

// a speacial axios instance for urls that require authentication
const authApi = (token) => axios.create({
  baseURL:process.env.REACT_APP_DUMMY_URL, 
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default authApi;