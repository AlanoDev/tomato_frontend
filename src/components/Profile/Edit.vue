<script setup>
import useProfileStore from '@/stores/useProfileStore';
import useArticleStore from '@/stores/useArticleStore';
import { reactive } from 'vue';

const profileStore = useProfileStore();
const articleStore = useArticleStore();
const article = articleStore.articles.find(item => item.id == profileStore.editId);

const articleInfo = reactive({
    title: article.title,
    content: article.content
})

const onResetClick=()=>{
    articleInfo.title = article.title;
    articleInfo.content = article.content;
}

const onSaveClick=()=>{
    article.title = articleInfo.title;
    article.content = articleInfo.content;
}
</script>

<template>
    <div class="edit_container">
        <div class="edit_title">
            <label>Title:</label>
            <input type="text" v-model="articleInfo.title">
        </div>
        <div class="edit_content">
            <div>Content:</div>
            <textarea name="" id="" cols="30" rows="10" v-model="articleInfo.content"></textarea>
        </div>
        <div class="edit_operation">
            <button class="edit_reset" @click="onResetClick">Reset</button>
            <button class="edit_save" @click="onSaveClick">Save</button>
        </div>
    </div>

</template>

<style scoped>
.edit_container {
    width: 98%;
    height: 98%;
    background-color: #dfdfdf;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.edit_title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    column-gap: 20px;
}

.edit_title label {
    font-size: 20px;
}

.edit_title input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    border: none;
}

.edit_content {
    width: 98%;
    height: 88%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
}

.edit_content div {
    font-size: 20px;
}

.edit_content textarea {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 10px;
    resize: none;
}

.edit_operation {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    column-gap: 20px;
}
.edit_operation button {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
    background-color: red;
}

.edit_operation button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
</style>