import { isDate, isObject} from './util'

/**
 * 实现一个encode函数，用于保留参数中的特殊值
 *
 * @export
 * @param {string} url
 * @returns {string}
 */
export function encode (url: string): string {
    return encodeURIComponent(url)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 实现一个makeUrl函数，用于拼接url
 *
 * @export
 * @param {string} url
 * @param {object} params
 * @returns {string}
 */
export function makeUrl (url: string, params?: any): string {
    if (!params) {
        return url
    }

    const parts: string[] = []

    Object.keys(params).forEach((key) => {
        let val = params[key]
        if (val === null || typeof val === 'undefined') {
            return
        }

        let values: string[]
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        }else {
            values = [val]
        }

        values.forEach((val) => {
            if(isDate(val)) {
                val = val.toISOString()
            } else {
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
    })

    let serializedParams = parts.join('&')

    if (serializedParams) {
        const markIndex = url.indexOf('#')
        if (markIndex !== -1) {
            url = url.slice(0, markIndex)
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    return url
}

