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

    const defaultCity = 'New York';

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

  onMounted(async () => {
    await loadSavedCities();
    await fetchWeather({ city: defaultCity });
});
</script>

<template>
  <div class="container mx-auto p-4">
    <Heading>{{ title }}</Heading>
    <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">

      <div class="lg:col-span-1 xl:col-span-2">
        <div class="mb-4">
          <Form @get-weather="fetchWeather" />
        </div>
        
        <div>
          <CitySelector 
            :cities="savedCities" 
            @select-city="handleCitySelect"  
          />
        </div>
      </div>

      <div class="lg:col-span-2 mt-4 lg:mt-0 xl:col-span-2">
        <Loading v-if="loading" />
        <Alert v-if="error">{{ error }}</Alert>

        <WeatherComponent 
          :weather="weather" 
          :formatTemperature="formatTemperature" 
        />
      </div>
    </div>
  </div>
</template>
