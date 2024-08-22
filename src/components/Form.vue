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
    // Emit an empty search to clear previous data
    emit('get-weather', { city: '' });
    return;
  }

  error.value = '';
  emit('get-weather', search);
};
</script>

<template>
  <form
    class="p-4"
    @submit.prevent="getWeather"
  >
    <div class="campo mb-4">
      <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
      <input
        type="text"
        id="city"
        placeholder="Ciudad"
        v-model="search.city"
        class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
      />
    </div>
    <button type="submit" class="w-full bg-slate-600 text-white p-2 rounded hover:bg-slate-700">
      Consultar Clima
    </button>
    <p v-if="error" class="text-red-500 mt-2 text-sm">{{ error }}</p>
  </form>
</template>
