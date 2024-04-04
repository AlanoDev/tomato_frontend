<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['delete']);
const props = defineProps({
    title: {
        type: String,
        default: 'Title',
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    img: String,
    date: {
        type: String,
        default: '2024-4-4',
    },
})
</script>

<template>
    <div class="history_item_container">
        <div class="item_img">
            <img :src="props.img" alt="">
        </div>
        <div class="item_title">
            {{ props.title }}
        </div>
        <div class="item_date">
            {{ props.date }}
        </div>
        <div class="item_delete">
            <button @click="emit('delete', props.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.history_item_container {
    width: 90%;
    height: 90px;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.history_item_container:hover {
    background-color: #f0f0f0;

}

.item_title {
    width: 60%;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
}

.item_img {
    width: 80px;
    height: 80px;
    background-color: gray;
    margin: 5px;
    border-radius: 5px;
}

.item_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.item_delete {
    margin-left: auto;
    margin-right: 10px;
}

.item_delete button {
    height: 40px;
    width: 80px;
    border: none;
    color: white;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
}

.item_delete button:hover {
    background-color: darkred;
}
</style>