<script setup>
import Banner from '@/components/Home/Banner.vue';
import Card from '@/components/Home/Card.vue';
import NavBar from '@/Layout/NavBar.vue'

</script>

<template>
    <div class="home">
        <NavBar class="navbar" />
        <div class="banner">
            <Banner />
        </div>
        <div class="cards">
            <template v-for="i in 8">
                <Card></Card>
            </template>
        </div>
        <div>
            <img class="more" src="../../src/assets/icon/more.png" />
        </div>
        <div class="search_bar">
            <input type="text" class="search_input">
            <button>搜索</button>
            <button>上传</button>
        </div>
    </div>
</template>

<style scoped>
.home {
    height: 100%;
    width: 100%;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.banner {
    width: 100%;
    height: 400px;
    background-color: #3f3f3f;
    position: relative;
    overflow: hidden;
}


.search_bar {
    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -30%);
    height: 60px;
    width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0.9;
}
.search_bar>button{
    width: 120px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: white;
}

.search_bar>button:hover{
   box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
.search_bar>input{
    height: 95%;
    width: 70%;
    border: none;
    outline: none;
    padding-left: 20px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
.search_bar>input:hover{
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.8);
}
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px 20px;
    justify-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

.more {
    position: absolute;
    right: 6%;
    top: 72%;
    width: 25px;
    height: 25px;
}

.more:hover {
    width: 30px;
    height: 30px;
}
.navbar{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
}
</style>