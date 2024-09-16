import axios from "axios";
const API_URL = "https://6671155e62ee439f74b.mockapi.io/api/v1/";
const AxiosService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;