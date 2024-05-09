import axios from 'axios'
import { getToken } from './utils'

const request = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// function request (url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => resolve({ data }))
//       .catch(reject)
//   })
// }

export default request
