<script setup>

</script>

<template>
    <div class="home">
        <div class="banner">
            <div class="search_bar"></div>
        </div>
        <div class="cards"></div>
    </div>
</template>

<style scoped>
.home {
    width: 90%;
    height: calc(100% - 50px);
    background-color: pink;
    margin: 0 auto;
}

.banner {
    width: 100%;
    height: 350px;
    background-color: #3f3f3f;
    position: relative;
}

.cards {
    width: 100%;
    height: calc(100% - 350px);
    background-color: #333333;
}

.search_bar {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -20%);
    background-color: aliceblue;
    height: 60px;
    width: 900px;
    border-radius: 50px;
}
</style>