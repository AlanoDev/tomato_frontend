<script setup>
import useArticleStore from '@/stores/useArticleStore';
import useProfileStore, { addHistory, addFavorite } from '@/stores/useProfileStore';
import useUserStore from '@/stores/useUserStore';
import LoginDialog from '@/components/Common/LoginDialog/LoginDialog.vue';
import { onMounted, ref, watchEffect } from 'vue';
import { store } from '@/stores/layoutStore';
import Toast from '@/components/Common/Toast/Toast.vue';
const articleStore = useArticleStore();
const profileStore = useProfileStore();
const userStore = useUserStore();
const article = articleStore.articles.find(article => article.id === store.articleId);

const onBack = () => {
    store.currentPage = store.lastPage;
}
const color = ref("gray");
watchEffect(() => {
    if (profileStore.favorites.find(item => item.article_id == article.id) != undefined) {
        color.value = "red";
    } else {
        color.value = "gray";
    }
})
onMounted(() => {
    addHistory(store.articleId)
})
const doFaviorite = () => {
    if (!userStore.isLogin) {
        Toast.show({
            message: "Please login first",
        }, () => {
            LoginDialog.show((res) => {
            })
        })
        if (!userStore.isLogin) {
            return
        }
    }
    addFavorite(article.id)
}
</script>

<template>
    <div class="article_container">
        <div class="article">
            <svg height="320" width="320" @click="doFaviorite">
                <path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90" :fill="color" />
            </svg>

            <div class="cover">
                <img :src="article.image" alt="">
            </div>
            <div class="title">
                <h1>{{ article.title }}</h1>
            </div>

            <div class="content">
                <p>{{ article.content }}</p>
            </div>
            <div class="back_home">
                <button @click="onBack">Back</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article_container {
    width: 90%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    margin: 0 auto;
}

svg {
    position: absolute;
    top: -100px;
    right: 0;
    z-index: 1;
    scale: 0.2;
    cursor: pointer;
}

.article {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.content {
    width: 100%;
    height: 350px;
    padding: 20px;
    overflow: scroll;
    text-wrap: stable;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

img {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
}

.back_home {
    margin-top: 15px;
    margin-right: 20px;
    margin-left: auto;
}

.back_home button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
    background-color: red;
}

.back_home button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
</style>