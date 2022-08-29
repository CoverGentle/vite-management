
// 登录传参类型
interface AdminLoginData {
  username: string
  password: string
}

// 登录返回值类型

interface AdminLoginRes {
  code: number
  token: string
  msg: string
}

// 用户列列表
interface UserList {
  code:number
  msg:string
  userInfoList:userInfoList[]
  
}
interface userInfoList{
  id:number,
  username:string,
  password:string,
  createdAt:Date,
  updatedAt:Date,
  deletedAt:null
}
