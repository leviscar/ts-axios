import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { makeUrl } from './helpers/url';
import { transformRequest } from './helpers/transformRequest'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl (config: AxiosRequestConfig): string {
  const { url, params } = config
  return makeUrl(url, params)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
export default axios