import axios from 'axios'
import { message } from '@/ui'
import { BASE_URL } from './constants'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    message.error('مشکل در دریافت اطلاعات')
    return Promise.reject(error)
  }
)

export default request
