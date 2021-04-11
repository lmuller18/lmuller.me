export const zeroPad = (num, places = 2) => String(num).padStart(places, '0')

export const removeEmpty = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null))
}

export const isEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}

export const getQueryString = (obj) => {
  let params = new URLSearchParams(obj)
  let keysForDel = []
  params.forEach((v, k) => {
    if (v == '' || v == 'null' || v == 'undefined') keysForDel.push(k)
  })
  keysForDel.forEach((k) => {
    params.delete(k)
  })
  return params.toString()
}
