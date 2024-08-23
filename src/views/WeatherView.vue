<script setup>
    import { ref, onMounted } from 'vue';
    import { Alert, CitySelector,  Form, Heading,Loading, WeatherComponent} from '../components'
    import useWeather from '../composable/useWeather'

   
   const {  
       clearSavedCities, 
       getWeatherData,
        weather,
        showWeather,
        formatTemperature,
        loading,
        error ,
        savedCities,
        loadSavedCities
    } = useWeather()

    const selectedCity = ref('');

      defineProps({
        title: {
            type: String
        }
    })

    const fetchWeather = async (search) => {
     await getWeatherData({ city: search.city });
    };

    const handleCitySelect = async (city) => {
    selectedCity.value = city;
    await getWeatherData({ city });
    };

    onMounted(() => {
        loadSavedCities();
    });
</script>

<template>
    <Heading>{{ title }}</Heading>
       <Form @get-weather="fetchWeather" />

       <CitySelector 
       :cities="savedCities" 
       @select-city="handleCitySelect"  
       />

        <Loading v-if="loading" />
        <Alert v-if="error">{{ error }}</Alert>

        <WeatherComponent 
         :weather="weather" 
         :formatTemperature="formatTemperature" 
        />
 
</template>
