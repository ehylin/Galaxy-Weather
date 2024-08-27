import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getLatLon, getWeather } from '../services/ClientService';

export const useWeatherStore = defineStore('weather', () => {
    const weather = ref({});
    const loading = ref(false);
    const error = ref('');
    const savedCities = ref([]);

    const getWeatherData = async (city) => {
     
        const key = import.meta.env.VITE_API_KEY;
        loading.value = true;
        weather.value = {};
        error.value = '';
        try {
            if (!city || typeof city !== 'string') {
                throw new Error('City is required');
            }
            const { lat, lon } = await getLatLon(city, key);
            const result = await getWeather(lat, lon, key);
            weather.value = result;
          
            saveCity(city);
        } catch (err) {
        
            error.value = err.message || 'Ciudad No Encontrada';
        } finally {
            loading.value = false;
        }
    };

    const saveCity = (city) => {
        const cities = JSON.parse(localStorage.getItem('savedCities')) || [];
        if (!cities.includes(city)) {
            cities.push(city);
            localStorage.setItem('savedCities', JSON.stringify(cities));
            savedCities.value = cities;
        }
    };

    const loadSavedCities = () => {
        savedCities.value = JSON.parse(localStorage.getItem('savedCities')) || [];
    };

    const clearCities = () => {
        localStorage.removeItem('savedCities');
        savedCities.value = [];
    };

    const showWeather = computed(() => Object.keys(weather.value).length > 0);

    const formatTemperature = (temperature) => parseInt(temperature - 273.15);

    return {
        clearCities,
        getWeatherData,
        weather,
        showWeather,
        formatTemperature,
        loading,
        error,
        savedCities,
        loadSavedCities,
    };
});
