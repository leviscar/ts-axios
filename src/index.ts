import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { makeUrl } from './helpers/url';

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function transformUrl (config: AxiosRequestConfig): string {
  const { url, params } = config
  return makeUrl(url, params)
}
export default axios