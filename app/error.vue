<template>
    <div class="container">
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <h2>Aduh! Terjadi Kesalahan</h2>
        <p class="error-message">{{ error.message || 'Halaman yang kamu cari tidak ditemukan.' }}</p>

        <button @click="handleError" class="btn-back">Kembali ke Beranda</button>
    </div>
</template>

<script setup>
const error = useError()

const handleError = () => {
    clearError({ redirect: '/' })
}
</script>

<style scoped>
.container {
    text-align: center;
    padding: 100px 20px;
    font-family: sans-serif;
    background-color: #f8fafc;
    min-height: 100vh;
    box-sizing: border-box;
}

.error-code {
    font-size: 6rem;
    margin: 0;
    color: #ef4444;
}

.error-message {
    color: #64748b;
    margin-bottom: 30px;
}

.btn-back {
    padding: 12px 24px;
    background-color: #38bdf8;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

.btn-back:hover {
    background-color: #0284c7;
}
</style>