import { ref, computed } from 'vue';
import { getLatLon, getWeather } from '../services/ClientService';

export default function useWeather() {
    const weather = ref({});
    const loading = ref(false);
    const error = ref('');

    const getWeatherData = async ({ city }) => {
        const key = import.meta.env.VITE_API_KEY;
        loading.value = true;
        weather.value = {};
        error.value = '';
        try {
            if (city.trim() === '') {
                throw new Error('City is required');
            }
            // Get latitude and longitude
            const { lat, lon } = await getLatLon(city, key);
            // Get weather data
            const result = await getWeather(lat, lon, key);
            weather.value = result;
        } catch {
            error.value = 'Ciudad No Encontrada'; // Cambié el mensaje de error para que sea en español
        } finally {
            loading.value = false;
        }
    };

    const showWeather = computed(() => {
        return Object.keys(weather.value).length > 0;
    });

    const formatTemperature = (temperature) => parseInt(temperature - 273.15);

    return {
        getWeatherData,
        weather,
        showWeather,
        formatTemperature,
        loading,
        error,
    };
}
