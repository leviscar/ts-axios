// 参考lodash getTag实现方法
const toString = Object.prototype.toString

/*
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 *
 * @export
 * @param {object} value
 * @returns {boolean}
 */
export function isDate(value: any): value is Date {
    return toString.call(value) === '[object Date]'
}


export function isObject(value: any): value is Object {
    return value !== null && typeof value === 'object'
}

