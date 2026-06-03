<template>
    <header class="header">
        <h2>Ini Header</h2>
        <nav class="nav">
            <span>
                <NuxtLink to="/">Home</NuxtLink>
            </span>
            <span>
                <NuxtLink to="/about">About</NuxtLink>
            </span>
            <span>
                <NuxtLink to="/fetching">useAsyncData</NuxtLink>
            </span>
            <span>
                <NuxtLink to="/fetching/paris">Data Fetching</NuxtLink>
            </span>
            <span>
                <NuxtLink to="/fetching-fetch">useFetch</NuxtLink>
            </span>
            <span>
                <NuxtLink to="/state">State Management</NuxtLink>
            </span>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav span {
    margin-right: 15px;
    cursor: pointer;
}
</style>