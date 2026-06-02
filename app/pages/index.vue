<template>
    <div class="container">
        <h1>Selamat Datang di {{ config.public.appName }}</h1>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>

<style scoped>
.container {
    font-family: sans-serif;
    padding: 20px;
    text-align: center;
}
</style>