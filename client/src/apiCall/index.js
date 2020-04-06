import axios from 'axios';

const tokenComposed = token => token ? { Authorization: `Bearer ${token}`} : {};

const apiCall = (url, method, body = {}, token = "") => {
  return axios({
    method,
    url:`http://localhost:5000/api${url}`,
    data: body,
    headers: { 
      ...tokenComposed(token)
    }
  })
}

export default apiCall;