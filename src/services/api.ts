import axios from 'axios'

const URL = 'https://loteriascaixa-api.herokuapp.com'

const api = axios.create({
  baseURL: URL
})

export default api
