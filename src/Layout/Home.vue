<script setup>
import Banner from '@/components/Home/Banner.vue';
import Card from '@/components/Home/Card.vue';


</script>

<template>
    <div class="home">
        <div class="banner">
            <Banner/>
        </div>
        <!-- <div class="cards"></div> -->
        <!-- <Card class="cards"></Card> -->
        <div class="cards">
            <template v-for="i in 8">
                <Card></Card>
            </template>
        </div>
        <div>
            <img class="more" src="../../src/assets/icon/more.png" />
        </div>
    </div>
</template>

<style scoped>
.home {
    width: 90%;
    height: calc(100% - 50px);
    background-color: white;
    margin: 0 auto;
}

.banner {
    width: 100%;
    height: 250px;
    background-color: #3f3f3f;
    position: relative;
    overflow: hidden;
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

.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-top: 20px;
    padding:0 60px;
    row-gap: 20px;
}
.more{
    position: absolute;
    right: 6%;
    top:72%;
    width: 25px;
    height: 25px;
}
.more:hover{
    width: 30px;
    height: 30px;
}
</style>