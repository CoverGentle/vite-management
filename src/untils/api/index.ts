import request from '../request/request'


// 登录
export const jwtLogin = (data: AdminLoginData): Promise<AdminLoginRes> => request.post('/jwtLogin', data)

// 获取数据
export const jwtGetMessage = ():Promise<AdminLoginRes>=>request.get('/jwtMessage')
// {
//   return request(
//     {
//       url: '/jwtLogin',
//       method: 'post',
//       data
//     }
//   )
// }