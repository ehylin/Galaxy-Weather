<script setup>
    import Footer from '../components/ui/Footer.vue';
    import Heading from '../components/ui/Heading.vue'
    import Form from '../components/Form.vue'


      defineProps({
        title: {
            type: String
        }
    })
</script>

<template>
    <Heading>{{ title }}</Heading>
     <h1 class="p-4">Buscados de Clima</h1>
       <Form />
    <Footer />
</template>
