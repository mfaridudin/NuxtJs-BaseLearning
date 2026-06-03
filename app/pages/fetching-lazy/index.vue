<template>
    <div class="container">
        <h2>Demo Fetch Lazy Load</h2>

        <div v-if="status === 'pending'" class="loading-box">
            <div class="spinner"></div>
            <p>Sedang memuat data destinasi secara Lazy Load...</p>
        </div>

        <div v-else-if="error" class="error-box">
            Gagal memuat data: {{ error.message }}
        </div>

        <div v-else class="list-box">
            <div class="weather-card">
                <h3>Suhu Saat Ini</h3>
                <div class="temp">{{ pageData.temperature }}°C</div>
                <p>Data langsung dari satelit cuaca</p>
                <button @click="refresh" class="refresh-btn">Cek Cuaca Terbaru</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, status, error, refresh } = await useLazyFetch(
    'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true'
)

const pageData = computed(() => {
    return {
        temperature: data.value?.current_weather?.temperature || 'N/A'
    }
})
</script>>

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

.loading-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    color: #64748b;
    text-align: center;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #cbd5e1;
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.error-box {
    padding: 15px;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 6px;
}

.list-box {
    background: #fff7ed;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ffedd5;
}
</style>