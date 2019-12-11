import { any, equals } from 'ramda'


export const apiFetch = (url, method = 'GET', payload) => {

  const headers = any(equals(method))(['POST', 'DELETE', 'PUT', 'PATCH'])
    ? { 'Content-type': 'application/json' }
    : {}

  const base = {
    headers: headers,
    method,
  }

  // Ignoring payload except if it's a POST, PUT, PATCH or DELETE method
  const params = any(equals(method))(['POST', 'DELETE', 'PUT', 'PATCH'])
    ? Object.assign({ body: JSON.stringify(payload) }, base)
    : base

  return window.fetch(`http://api:9000/${url}`, params)
}

export const fakeRequest = (url, method, json) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ json: () => json }), 200)
  })
}
