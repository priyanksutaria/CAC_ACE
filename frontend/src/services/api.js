import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.161.108:8000" //your api URL
});

export default api;