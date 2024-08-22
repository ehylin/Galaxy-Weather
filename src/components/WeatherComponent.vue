<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

// Define props for the component
const props = defineProps({
  weather: {
    type: Object,
    required: true
  },
  formatTemperature: {
    type: Function,
    required: true
  }
});

// Computed property to check if weather data is available
const showWeather = computed(() => {
  return Object.keys(props.weather).length > 0;
});
</script>

<template>
  <div v-if="showWeather" class="p-4">
    <!-- Localidad consultada -->
    <h2 class="text-xl font-bold">Clima in: {{ weather.name }}</h2>
    
    <!-- Estado meteorológico actual -->
    <p class="text-lg">
      <strong>Estado Meteorológico:</strong> {{ weather.weather[0].description }}
    </p>
    
    <!-- Temperatura actual -->
    <p class="text-lg">
      <strong>Temperatura Actual:</strong> {{ formatTemperature(weather.main.temp) }}°C
    </p>
    
    <!-- Temperatura máxima y mínima -->
    <p class="text-lg">
      <strong>Temperatura Máxima:</strong> {{ formatTemperature(weather.main.temp_max) }}°C
    </p>
    <p class="text-lg">
      <strong>Temperatura Mínima:</strong> {{ formatTemperature(weather.main.temp_min) }}°C
    </p>
    
    <!-- Presión atmosférica -->
    <p class="text-lg">
      <strong>Presión Atmosférica:</strong> {{ weather.main.pressure }} hPa
    </p>
    
    <!-- Humedad relativa -->
    <p class="text-lg">
      <strong>Humedad Relativa:</strong> {{ weather.main.humidity }}%
    </p>
    
    <!-- Visibilidad -->
    <p class="text-lg">
      <strong>Visibilidad:</strong> {{ weather.visibility / 1000 }} km
    </p>
    
    <!-- Información del viento -->
    <p class="text-lg">
      <strong>Viento:</strong> {{ weather.wind.speed }} m/s, dirección {{ weather.wind.deg }}°
    </p>
  </div>
</template>
