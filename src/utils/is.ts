export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}