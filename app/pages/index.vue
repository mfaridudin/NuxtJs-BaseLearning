<template>
    <div class="container">
        <h1>Selamat Datang di {{ config.public.appName }}</h1>

        <h2>Contoh Penggunaan Assets</h2>
        <div class="asset">
            <div>
                <img src="/img/prabowo.jpg" alt="prabowo">
                <p>Prabowo Subianto</p> <span class="asset-description">ini dari public assets</span>
            </div>
            <div>
                <img src="~/assets/img/gibran.jpg" alt="gibran">
                <p>Gibran Rakabuming Raka</p> <span class="asset-description">ini dari app/assets/img</span>
            </div>
        </div>
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

.asset {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
}

.asset img {
    width: 200px;
    height: auto;
    border-radius: 10px;
}

.asset-description {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #555;

}
</style>