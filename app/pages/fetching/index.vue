<template>
    <div class="container">
        <NuxtLink to="/" class="back-btn">← Kembali</NuxtLink>

        <div v-if="status === 'pending'" class="loading">
            ⏳ Sedang mengumpulkan info destinasi dan cuaca...
        </div>

        <div v-else-if="error" class="error-box">
            ⚠️ Gagal memuat data: {{ error.message }}
        </div>

        <div v-else class="detail-grid">
            <div class="main-info">
                <h1>{{ pageData.title }}</h1>
                <p class="location">{{ pageData.location }}</p>
                <p class="desc">{{ pageData.desc }}</p>
            </div>

            <div class="weather-card">
                <h3>Suhu Saat Ini</h3>
                <div class="temp">{{ pageData.temperature }}°C</div>
                <p>Data langsung dari satelit cuaca</p>
                <button @click="refresh" class="refresh-btn">🔄 Cek Cuaca Terbaru</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const { data: pageData, status, error, refresh } = await useAsyncData(
    `destination-detail-${id}`,
    async () => {
        const [detailRes, weatherRes] = await Promise.all([
            $fetch('/api/destinations'),
            $fetch('https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true')
        ])

        return {
            allDestinations: detailRes.data,
            weather: weatherRes.current_weather
        }
    },
    {
        lazy: true,

        transform: (inputRaw) => {
            const matchedData = inputRaw.allDestinations?.find(item => item.id === id)
            if (!matchedData) {
                return {
                    title: 'Destinasi Tidak Ditemukan',
                    location: '-',
                    desc: 'Maaf, data untuk destinasi ini tidak tersedia.',
                    temperature: 'N/A'
                }
            }

            return {
                title: matchedData.name,
                location: matchedData.location,
                desc: matchedData.description,
                temperature: inputRaw.weather?.temperature || 'N/A'
            }
        }
    }
)
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: sans-serif;
}

.back-btn {
    color: #38bdf8;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 20px;
}

.loading {
    font-size: 1.2rem;
    text-align: center;
    color: #64748b;
    padding: 40px;
}

.error-box {
    padding: 20px;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 8px;
}

.detail-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}

.main-info h1 {
    color: #1e3a8a;
    margin-top: 0;
}

.location {
    font-weight: bold;
    color: #0284c7;
}

.desc {
    color: #334155;
    line-height: 1.7;
}

.weather-card {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    height: fit-content;
}

.weather-card h3 {
    margin-top: 0;
    color: #0369a1;
}

.temp {
    font-size: 3rem;
    font-weight: bold;
    color: #0284c7;
    margin: 15px 0;
}

.refresh-btn {
    padding: 8px 16px;
    background: white;
    border: 1px solid #0284c7;
    color: #0284c7;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
}

.refresh-btn:hover {
    background: #0284c7;
    color: white;
}
</style>