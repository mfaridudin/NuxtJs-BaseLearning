<template>
    <div class="container">
        <div>
            Counter dengan useState: {{ counter }}
            <button @click="counter++">
                +
            </button>
            <button @click="counter--">
                -
            </button>
        </div>

        <div>
            Counter dengan ref: {{ count }}
            <button @click="count++">
                +
            </button>
            <button @click="count--">
                -
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))

const count = ref(0)
</script>

<style scoped>
.container {
    font-family: sans-serif;
    padding: 20px;
    text-align: center;
}
</style>
