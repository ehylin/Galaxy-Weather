<script setup>
import { reactive, ref } from 'vue';

const search = reactive({
  city: '',
});
const error = ref('');

const emit = defineEmits(['get-weather']);

const getWeather = () => {

   if (search.city.trim() === '') {
    error.value = 'La ciudad es obligatoria';
    return;
  }

  error.value = '';
  emit('get-weather', search);
};
</script>

<template>
  <form
    class="py-4"
    @submit.prevent="getWeather"
  >
    <div class="campo mb-4">
      <label for="city" class="block text-sm font-medium text-white">Ciudad</label>
      <input
        type="text"
        id="city"
        placeholder="Ciudad"
        v-model="search.city"
        class="mt-1 p-2 border border-gray-300 text-white bg-transparent rounded-md shadow-sm active:ring-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-white block w-full sm:text-sm"
      />
    </div>
    <button type="submit" class="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-500">
      Consultar Clima
    </button>
    <p v-if="error" class="text-red-500 mt-2 text-sm">{{ error }}</p>
  </form>
</template>
