<template>
    <div class="card">
        <div class="img">
            <img :src="img" alt>
        </div>
        <div>
            <span>{{ title }} </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'title'
    },
    img: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.card {
    width: 440px;
    height: 220px;
    border-radius: 5px;
    padding-bottom: 10px;
    background-color: #ececf7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.card:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
    transform: translateY(-5px);
    transition: all 0.3s;
}

.img {
    width: 100%;
    height: calc(100% - 30px);
}

.img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
