import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

// 拦截
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  })

// 响应
instance.interceptors.response.use(
  result => {
    return result.data
  },
  error => {
    return Promise.reject(error)
  })

  export default instance