import request from '../request/request'


// 登录
export const jwtLogin = (data: AdminLoginData)=>{
  return request<AdminLoginRes>({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取用户列表
export const getUserList = ()=>{
  return request<UserList>(
        {
          url: '/user',
          method: 'get',
        }
      )
}
// {
//   return request(
//     {
//       url: '/jwtLogin',
//       method: 'post',
//       data
//     }
//   )
// }