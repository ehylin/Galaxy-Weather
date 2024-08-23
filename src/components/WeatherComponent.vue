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

const showWeather = computed(() => {
  return Object.keys(props.weather).length > 0;
});

</script>

<template>
  <div v-if="showWeather" class="p-4">
    <!-- Localidad consultada -->
    <h2 class="text-xl font-bold">Clima en: {{ props.weather.name }}</h2>
    
  <!-- Estado meteorológico actual -->
    <p class="text-lg">
      <strong>Estado Meteorológico:</strong> 
      <img :src="weatherIconUrl" alt="Weather Icon" class="inline-block w-12 h-12" />
      {{ props.weather.weather[0].description }}
    </p>
    
    <!-- Temperatura actual -->
    <p class="text-lg">
      <strong>Temperatura Actual:</strong> {{ props.formatTemperature(props.weather.main.temp) }}°C
    </p>
    
    <!-- Temperatura máxima y mínima -->
    <p class="text-lg">
      <strong>Temperatura Máxima:</strong> {{ props.formatTemperature(props.weather.main.temp_max) }}°C
    </p>
    <p class="text-lg">
      <strong>Temperatura Mínima:</strong> {{ props.formatTemperature(props.weather.main.temp_min) }}°C
    </p>
    
    <!-- Presión atmosférica -->
    <p class="text-lg">
      <strong>Presión Atmosférica:</strong> {{ props.weather.main.pressure }} hPa
    </p>
    
    <!-- Humedad relativa -->
    <p class="text-lg">
      <strong>Humedad Relativa:</strong> {{ props.weather.main.humidity }}%
    </p>
    
    <!-- Visibilidad -->
    <p class="text-lg">
      <strong>Visibilidad:</strong> {{ props.weather.visibility / 1000 }} km
    </p>
    
    <!-- Información del viento -->
    <p class="text-lg">
      <strong>Viento:</strong> {{ props.weather.wind.speed }} m/s, dirección {{ props.weather.wind.deg }}°
    </p>
  </div>
</template>
