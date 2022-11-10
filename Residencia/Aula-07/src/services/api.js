import axios from 'axios';

const api = axios.create({
    baseURL: "https://UrlDaApiAqui.mockapi.io/"
});

export default api;