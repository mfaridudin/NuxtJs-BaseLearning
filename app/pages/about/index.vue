<template>
    <div class="container">
        <h1>Halaman About</h1>
        <p>Ini adalah halaman about. Di sini kamu bisa menambahkan informasi tentang aplikasi atau dirimu.</p>
        <p>Halaman ini Bisa diakses dari navigasi di atas, Dibuat dengan Nuxt Routing</p>

        <h2>Dynamic Route</h2>
        <NuxtLink to="/about/123">Link ke About dengan ID 123</NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'rotate',
    },
})

useHead({
    title: 'About Page',
    meta: [
        { name: 'description', content: 'My amazing site.' },
    ],
    bodyAttrs: {
        class: 'test',
    },
})
</script>
<style scoped>
.container {
    font-family: sans-serif;
    padding: 20px;
    text-align: center;
}
</style>