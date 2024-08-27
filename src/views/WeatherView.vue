<script setup>
    import { defineProps, ref, onMounted, watch } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { Alert, CitySelector,  Form, Heading,Loading, WeatherComponent} from '../components'
    import useWeather from '../composable/useWeather'
    //import { useWeatherStore } from '../stores/useWeatherStore';

   
   const {  
       clearCities,
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

//   const weatherStore = useWeatherStore();
// const { 
//     clearCities,
//     getWeatherData,
//     weather,
//     showWeather,
//     formatTemperature,
//     loading,
//     error,
//     savedCities,
//     loadSavedCities 
// } = weatherStore;

    const router = useRouter();
    const route = useRoute();
    const selectedCity = ref('');

    const defaultCity = '';

    const props = defineProps({
    title: {
        type: String,
        default: 'Buscador de clima'
    },
    cityParam: {
        type: String,
        default: ''  // Si no se proporciona una ciudad en la URL, se usará la ciudad por defecto
    }
});

    const fetchWeather = async (city) => {
    if (city) {
        await getWeatherData(city);
    }
};

    //Para usar el formulario
    // const fetchWeather = async (search) => {
    //  await getWeatherData({ city: search.city });
    // };

    const handleCitySelect = async (city) => {
    selectedCity.value = city;
    await getWeatherData({city});
    };




   //Para usar un parameto desde la url 
  // Verificamos si hay un parámetro de ciudad en la URL
  onMounted(async () => {
      await loadSavedCities();
      const city = props.cityParam;  
      selectedCity.value = city;
      await fetchWeather({city});
  });

  // Observamos cambios en el parámetro de la ciudad en la URL
// watch(
//     () => props.cityParam,
//     async (newCity) => {
//         console.log('watch detected new cityParam:', newCity);
//         if (newCity) {
//             selectedCity.value = newCity;
//             await fetchWeather(newCity);
//         }
//     },
//     { immediate: true }  // Agrega esto para que el `watch` se ejecute inmediatamente con el valor actual de `props.cityParam`
// );


  const handleClearCities = () => {
    clearCities();
  };
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
            @clear-cities="handleClearCities"
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
