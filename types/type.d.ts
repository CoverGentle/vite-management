
// 登录传参类型
interface AdminLoginData{
  username:string,
  password:string
}

// 登录返回值类型

interface AdminLoginRes{
  code:number,
  token:string
  msg:string
}
