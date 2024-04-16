<script setup>
import useArticleStore from '@/stores/useArticleStore';
import { ref } from 'vue';
const store = useArticleStore();
const emit = defineEmits(['delete']);
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    article_id: {
        type: Number,
        required: true
    },
})
const valid = ref(true);
const history = store.articles.find(item => item.id == props.article_id);
if (history == undefined) {
    valid.value = false;
}
</script>

<template>
    <div class="history_item_container">
        <template v-if="valid">
            <div class="item_img">
                <img :src="history.image" alt="">
            </div>
            <div class="item_title">
                {{ history.title }}
            </div>
            <div class="item_delete">
                <button @click.stop="emit('delete', props.id)">Delete</button>
            </div>
        </template>
        <template v-else>
            <div class="invalid">Invalid history</div>
            <div class="item_delete">
                <button @click.stop="emit('delete', props.id)">Delete</button>
            </div>
        </template>
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
    cursor: pointer;
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

.invalid {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: red;
}
</style>