<template>
    <h1>Selamat Datang di {{ config.public.appName }}</h1>
</template>

<script setup>
const config = useRuntimeConfig()
</script>