<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)
</script>

<template>
    <div class="container">
        <h1>Halaman About dengan ID: {{ route.params.id }}</h1>
    </div>
</template>

<style scoped>
.container {
    font-family: sans-serif;
    padding: 20px;
    text-align: center;
}
</style>