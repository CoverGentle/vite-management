import request from '../request/request'

// 登录
export const login = ()=>{
  return request(
    {
      url: '/api/list',
      method: 'post',
      params:{
        t:Date.now()
      }
    }
  )
}