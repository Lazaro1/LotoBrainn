import axios from 'axios'

const baseURL = 'https://brainn-api-loterias.herokuapp.com/api/v1'

const api = axios.create({
  baseURL: baseURL
})

export default api
