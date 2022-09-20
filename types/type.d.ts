
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
  data: WeatherInfos[]
  msg: string
}

interface WeatherInfos{
  aqi:string
  data:string
  fl:string
  fx:string
  high:string
  low:string
  notice:string
  sunrise:string
  sunset:string
  type:string
  week:string
  ymd:string
}


// 疫情数据

interface epidemicInfo{
  code:number
  data:mainData
  msg:stirng
}

interface mainData{
  diseaseh5Shelf:diseaseh5Shelf
}

interface diseaseh5Shelf{
  areaTree:areaTree[]
  // chinaTotal:
}
interface areaTree{
  children:children[]
}
interface children{
  name:string,
  date:string,
  adcode:string
  total:total
  today:today
}
interface total{
  dead:string, //累计死亡
  nowConfirm:string //现有确诊
  confirm:string //累计确诊
}
interface today{
  confirm:string //新增确诊
}
