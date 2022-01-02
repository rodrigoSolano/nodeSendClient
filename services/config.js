import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default clienteAxios;