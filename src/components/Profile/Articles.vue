<script setup>
import useArticleStore from '@/stores/useArticleStore';
import useProfileStore from '@/stores/useProfileStore';

const store = useArticleStore();
const profileStore = useProfileStore();
const onDelete = (id) => {
    store.articles = store.articles.filter(item => item.id !== id);
}
const onEdit = (id) => {
    profileStore.currentIndex = 3;
    profileStore.editId = id;
}
</script>

<template>
    <div class="articles_container">
        <template v-for="article in store.articles" :key="article.id">
            <div class="article_item">
                <div class="item_img">
                    <img src="https://picsum.photos/200/300" alt="">
                </div>
                <div class="item_title">
                    {{ article.title }}
                </div>
                <div class="item_date">
                    {{ article.date }}
                </div>
                <div class="item_operation">
                    <button class="item_edit" @click="onEdit(article.id)">Edit</button>
                    <button class="item_delete" @click="onDelete(article.id)">Delete</button>
                </div>
            </div>
        </template>
    </div>

</template>

<style scoped>
.articles_container {
    width: 98%;
    height: 98%;
    background-color: gray;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 10px;
    border-radius: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;


}

.article_item {
    width: 90%;
    height: 90px;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.article_item:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

.item_img {
    width: 80px;
    height: 80px;
    background-color: gray;
    margin: 5px;
    border-radius: 5px;
}

.item_img img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
}

.item_title {
    width: 60%;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
}

.item_date {
    width: 20%;
    font-size: 16px;
    margin: 0 10px;
}

.item_operation {
    width: 15%;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    margin: 0 10px;
}

.item_operation button {
    width: 140px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
}

.item_edit {
    background-color: blue;
    color: white;
}

.item_edit:hover {
    background-color: darkblue;
}

.item_delete {
    background-color: red;
    color: white;
}

.item_delete:hover {
    background-color: darkred;
}
</style>