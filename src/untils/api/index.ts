import request from '../request/request'


// 登录
export const jwtLogin = (data: AdminLoginData) => {
  return request<AdminLoginRes>({
    url: '/user/login',
    method: 'post',
    data
  })
}


// 注册
export const registerUser = (data: { username: string, password: string }) => {
  return request(
    {
      url: '/user/register',
      method: 'post',
      data
    }
  )
}

// 获取用户列表
export const getUserList = () => {
  return request<UserList>(
    {
      url: '/user',
      method: 'get',
    }
  )
}

// 获取城市列表

export const getCityeList = ()=>{
  return request(
  {
    url:'/weather/city',
    method:'get'
  }
  )
}

// 获取城市天气信息
export const getWeather = (data:{cityNum:string})=>{
  return request<CityWeaher>(
    {
      url:'/weather/single',
      method:'post',
      data
    }
  )
}

// 获取疫情数据

export const getEpidemicInfo = ()=>{
  return request<epidemicInfo>(
  {
    url:'/epidemic/info',
    method:'get'
  }
  )
}

// 获取用户列表
export const getwxUserListInfo = ()=>{
  return request<userList>(
    {
      url:'/wechat/getwxUserListInfo',
      method:'get'
    }
  )
}
