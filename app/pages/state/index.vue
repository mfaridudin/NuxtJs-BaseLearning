<template>
    <div class="container">
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
    </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<style scoped>
.container {
    font-family: sans-serif;
    padding: 20px;
    text-align: center;
}
</style>
