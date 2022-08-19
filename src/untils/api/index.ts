import request from '../request/request'


// 登录
export const jwtLogin = (data: AdminLoginData): Promise<AdminLoginRes> => request.post('/jwtLogin', data)

// {
//   return request(
//     {
//       url: '/jwtLogin',
//       method: 'post',
//       data
//     }
//   )
// }