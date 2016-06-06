export default function (method, uri, body = {}, headers = {}) {
  const token = localStorage.getItem('token')
  if (token !== null) {
    headers['Authorization'] = 'Bearer ' + token
  }

  headers['Accept'] = 'application/json'
  headers['Content-Type'] = 'application/json'

  return fetch('http://xtrem-agile.dev' + uri, {
    method: method,
    headers: headers,
    body: method.toUpperCase() === 'GET' ? undefined : JSON.stringify(body)
  }).then((response) => {
    if (response.status === 204) {
      return response
    }

    return response.json().then((json) => {
      if (response.status >= 300 || response.status < 200) {
        throw json
      }

      return json
    })
  })
}
