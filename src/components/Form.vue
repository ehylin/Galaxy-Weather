<script setup>
import { reactive, ref } from 'vue';

const busqueda = reactive({
  ciudad: '',
});
const error = ref('');

const emit = defineEmits(['obtener-clima']);

const consultarClima = () => {
  if (Object.values(busqueda).includes('')) {
    error.value = 'La ciudad es obligatoria';
    return;
  }

  error.value = '';
  emit('obtener-clima', busqueda);
};
</script>

<template>
  <form
    class="p-4"
    @submit.prevent="consultarClima"
  >
    <div class="campo mb-4">
      <label for="ciudad" class="block text-sm font-medium text-gray-700">Ciudad</label>
      <input
        type="text"
        id="ciudad"
        placeholder="Ciudad"
        v-model="busqueda.ciudad"
        class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
      />
    </div>
    <button type="submit" class="w-full bg-slate-600 text-white p-2 rounded hover:bg-slate-700">
      Consultar Clima
    </button>
    <p v-if="error" class="text-red-500 mt-2 text-sm">{{ error }}</p>
  </form>
</template>
