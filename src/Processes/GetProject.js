import api from '../lib/api'

export default function process (id) {
  return api('get', '/projects/' + id)
}
