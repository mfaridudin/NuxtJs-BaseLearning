<template>
    <div class="container">
        <h2>Contoh Simple useFetch</h2>

        <div v-if="status === 'pending'" class="loading">
            useFetch sedang mengambil data...
        </div>

        <div v-else-if="error" class="error-box">
            Gagal memuat data: {{ error.message }}
        </div>

        <div v-else class="list-box">
            <h3>Daftar Destinasi Wisata (via useFetch):</h3>
            <ul>
                <li v-for="item in data.data" :key="item.id">
                    <strong>{{ item.name }}</strong> ({{ item.location }})
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const { data, status, error } = await useFetch('/api/destinations')
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: sans-serif;
}

.back-btn {
    color: #38bdf8;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 20px;
}

.loading {
    color: #64748b;
    font-style: italic;
}

.error-box {
    padding: 15px;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 6px;
}

.list-box {
    background: #f0fdf4;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #bbf7d0;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
    font-size: 1.1rem;
}
</style>