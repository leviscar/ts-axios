// 支持七种请求方式
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

// axios 请求接口
// url为必选，其它字段为可选, 默认为get请求方式
export interface AxiosRequestConfig {
    method?: Method
    url?: string
    data?: any
    params?: any
}


