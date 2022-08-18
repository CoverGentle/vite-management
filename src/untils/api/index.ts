import request from '../request/request'

// 登录
export const getData = ()=>{
  return request(
    {
      url: '/getData',
      method: 'get',
    }
  )
}