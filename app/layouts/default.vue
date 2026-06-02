<template>
    <div class="layout">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
}
</style>

<style>
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>