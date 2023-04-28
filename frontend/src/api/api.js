import axios from 'axios';
export const link_api = "http://localhost:3050"

// Cria uma nova instância do axios
const api = axios.create({
  baseURL: link_api
});


export default api;