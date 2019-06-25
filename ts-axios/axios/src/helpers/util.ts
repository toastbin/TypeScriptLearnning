const toString = Object.prototype.toString

// 利用 Object.prototype.toString.call() 判断是否是 Date
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val:any):val is Object{
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
