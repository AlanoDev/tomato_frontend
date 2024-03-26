<script setup>
import { ref } from 'vue';

const images = ref([{
    src: "/src/assets/1.jpeg"
}, {
    src: "/src/assets/2.jpeg"
}, {
    src: "/src/assets/3.jpeg"
}])
const index=ref(0)

const setIndex=(idx)=>index.value=idx-1

</script>

<template>
    <div class="container">
        <template v-for="(item,idx) in images">
            <img v-show="index==idx" :src="item.src">
        </template>
        <div class="circles">
            <template v-for="i in 3">
                <div class='circle' :class="{'active':index==i-1}" @click="setIndex(i)"></div>
            </template>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 100%;
    height: 100%;
    position: relative;
}
.circles{
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%,-5%);
    display: flex;
}
.circle{
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 50%;
    margin-right: 50px;
}
.circle.active{
    background-color:red;
}
</style>