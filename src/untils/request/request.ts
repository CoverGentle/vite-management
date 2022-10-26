import axios,{AxiosResponse,AxiosRequestConfig} from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000
})

// 拦截
instance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    let token = localStorage.getItem('token')
    if(token){
      config.headers = config.headers || {}
      config.headers.Authorization = token
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  })

// 响应
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: any) => {
    return Promise.reject(error)
  })

  // export default instance
  export default <T = any>(config: AxiosRequestConfig) => {
    return instance(config).then((res) => {
      return res as unknown as T
    })
  }