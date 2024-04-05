<script setup>
import useArticleStore from '@/stores/useArticleStore';
import useProfileStore from '@/stores/useProfileStore';
import { store } from '@/stores/layoutStore';
import { watchEffect, ref } from 'vue';
const articleStore = useArticleStore();
const profileStore = useProfileStore();

const onArticleItemClick = (id) => {
    store.currentPage = 'article';
    store.lastPage = 'profile';
    store.articleId = id;
    if (profileStore.histories.find(history => history.id === id) === undefined) {
        console.log(profileStore.histories);
        profileStore.histories.push({
            id: id,
            date: new Date().toLocaleString(),
        });

    }
}
const articles = ref(articleStore.articles.filter(article => profileStore.favorites.includes(article.id)))
watchEffect(() => {
    articles.value = articleStore.articles.filter(article => profileStore.favorites.includes(article.id));
})
const onDelete = (id) => {
    profileStore.favorites = profileStore.favorites.filter(item => item != id);
}
</script>

<template>
    <div class="favorite_container">
        <template v-for="article in articles" :key="article.id">
            <div class="item" @click="onArticleItemClick(article.id)">
                <div class="item_img">
                    <img :src="article.img" alt="">
                </div>
                <div class="item_title">
                    {{ article.title }}
                </div>
                <div class="item_date">
                    {{ article.date }}
                </div>
                <div class="item_operation">
                    <button class="item_delete" @click.stop="onDelete(article.id)">Delete</button>
                </div>
            </div>
        </template>
    </div>

</template>

<style scoped>
.favorite_container {
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

.item {
    width: 90%;
    height: 90px;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.item:hover {
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
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    margin-left: auto;
    margin-right: 10px;
}

.item_operation button {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
}

.item_delete {
    background-color: red;
    color: white;
}

.item_delete:hover {
    background-color: darkred;
}
</style>