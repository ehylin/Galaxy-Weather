import axios from 'axios';

// Configuración base de Axios
const instance = axios.create({
    baseURL: 'https://api.openweathermap.org',
    timeout: 10000, 
});

export default instance;