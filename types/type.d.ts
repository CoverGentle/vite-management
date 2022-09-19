
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
  code: number
  msg: string
  userInfoList: userInfoList[]

}
interface userInfoList {
  id: number,
  username: string,
  password: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: null
}

// 城市列表
interface CityList {
  code: number
  msg: string
  data: City[]
}

interface City {
  id: string,
  cityname: string,
  citynumber: string,
}

// 城市天气情况
interface CityWeaher {
  code: number,
  data: {
    weatherInfo:WeatherInfos[]
  },
  msg: string
}

interface WeatherInfos{
  aqi:string
  data:string
  fl:string
  fx:string
  high:string
  low:string
  nptice:string
  sunrise:string
  sunset:string
  type:string
  week:string
  ymd:string
}
