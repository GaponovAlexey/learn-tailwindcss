import axios from 'axios'
export const API_URL = 'https://jsonplaceholder.typicode.com'
axios.defaults.baseURL = API_URL
export const MyService = {
  async GetAll() {return axios.get('/todos')},}
