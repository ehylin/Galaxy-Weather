<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  cities: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select-city']);

const handleCityClick = (city) => {
  emit('select-city', city);
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-bold">Localidades Consultadas</h2>
    <ul>
      <li v-for="city in props.cities" :key="city" class="my-2">
        <button @click="handleCityClick(city)" class="bg-gray-200 p-2 rounded w-full text-left">
          {{ city }}
        </button>
      </li>
    </ul>
  </div>
</template>
