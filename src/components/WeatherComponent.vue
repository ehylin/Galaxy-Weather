<script setup>
import { computed } from 'vue';



const props = defineProps({
  weather: {
    type: Object,
    required: true
  },
  formatTemperature: {
    type: Function,
    required: true
  },
});

const weatherIconUrl = computed(() => {
  const baseUrl = 'http://openweathermap.org/img/w/';
  const iconCode = props.weather.weather && props.weather.weather[0] ? props.weather.weather[0].icon : '';
  return iconCode ? `${baseUrl}${iconCode}.png` : '';
});



</script>

<template>
  <div  class="px-6 py-4 bg-slate-100 border rounded-lg">
    <!-- Localidad consultada -->
    <h2 class="text-xl font-bold lg:text-center">Clima en: {{ props.weather.name }}</h2>
  
    
    <!-- Temperatura actual, máxima y mínima -->
   <div class="flex justify-center items-center border-b border-gray-300 py-4">

  <div class="flex flex-col items-center mr-12">
    <img :src="weatherIconUrl" alt="Weather Icon" class="inline-block w-20 h-20" />
    <p class="mt-2">{{ props.weather.weather[0].description }}</p>
  </div>

  <div>
    <!-- Temperatura actual -->
    <p class="text-3xl">
      {{ props.formatTemperature(props.weather.main.temp) }}°C
    </p>

    <!-- Temperatura mínima y máxima -->
    <div class="text-lg mt-2">
      <span>
        <strong>&#8595;</strong> {{ props.formatTemperature(props.weather.main.temp_min) }}°C
      </span>
      <span class="ml-2">
        <strong>&#8593;</strong> {{ props.formatTemperature(props.weather.main.temp_max) }}°C
      </span>
    </div>
  </div>
</div>


    <!-- Presión atmosférica -->
    <div class="flex items-center border-b border-gray-300 py-4">
      <p class="text-lg">
        <strong>Presión Atmosférica:</strong> {{ props.weather.main.pressure }} hPa
      </p>
    </div>
    
    <!-- Humedad relativa -->
    <div class="flex items-center border-b border-gray-300 py-4">
      <p class="text-lg">
        <strong>Humedad Relativa:</strong> {{ props.weather.main.humidity }}%
      </p>
    </div>
    
    <!-- Visibilidad -->
    <div class="flex items-center border-b border-gray-300 py-4">
      <p class="text-lg">
        <strong>Visibilidad:</strong> {{ props.weather.visibility / 1000 }} km
      </p>
    </div>
    
    <!-- Información del viento -->
    <div class="flex items-center py-4">
      <p class="text-lg">
        <strong>Viento:</strong> {{ props.weather.wind.speed }} m/s, dirección {{ props.weather.wind.deg }}°
      </p>
    </div>
  </div>
</template>
