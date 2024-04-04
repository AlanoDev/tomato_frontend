<script setup>
import { ref } from 'vue';

const images = ref([{
    src: "/src/assets/1.jpeg"
}, {
    src: "/src/assets/2.jpeg"
}, {
    src: "/src/assets/3.jpeg"
}])
const index = ref(0)

setInterval(() => {
    index.value = (index.value + 1) % 3
}, 2000)


</script>

<template>
    <div class="container">
        <template v-for="(item, idx) in images">
            <img v-show="index == idx" :src="item.src">
        </template>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>