import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7001/',
  timeout: 10000
})

// 拦截
instance.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if(token){
      config.headers = config.headers || {}
      config.headers.Authorization = token
    }
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