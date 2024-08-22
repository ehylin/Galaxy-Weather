<script setup>
    import Footer from '../components/ui/Footer.vue';
    import Heading from '../components/ui/Heading.vue'
    import Form from '../components/Form.vue'
    import useWeather from '../composable/useWeather'
    import WeatherComponent from '../components/WeatherComponent.vue'
    import Loading from '../components/ui/Loading.vue'
    import Alert from '../components/ui/Alert.vue'
   
   const {   
       getWeatherData,
        weather,
        showWeather,
        formatTemperature,
        loading,
        error } = useWeather()

      defineProps({
        title: {
            type: String
        }
    })

    const fetchWeather = async (search) => {
     await getWeatherData({ city: search.city });
    };
</script>

<template>
    <Heading>{{ title }}</Heading>
     <h1 class="p-4">Buscados de Clima</h1>
       <Form @get-weather="fetchWeather" />


        <Loading v-if="loading" />
        <Alert v-if="error">{{ error }}</Alert>


        <WeatherComponent 
         :weather="weather" 
         :formatTemperature="formatTemperature" 
        />
    <Footer />
</template>
