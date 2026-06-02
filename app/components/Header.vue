<template>
    <header class="header">
        <h2>Ini Header</h2>
        <nav class="nav">
            <span>Home</span>
            <span>About</span>
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