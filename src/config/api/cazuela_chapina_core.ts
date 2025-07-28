import axios from 'axios';

export const cazuela_chapina_core = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT || 'not-set',
});
