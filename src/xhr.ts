import { AxiosRequestConfig} from './types'

/**
 * xhr 请求函数
 *
 * @export
 * @param {AxiosRequestConfig} config
 */
export default function xhr(config: AxiosRequestConfig): void {
    const { data = null, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    request.send(data)
}