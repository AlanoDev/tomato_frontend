<script setup>
import Banner from '@/components/Home/Banner.vue';
import Card from '@/components/Home/Card.vue';
import NavBar from '@/Layout/NavBar.vue'
import useArticleStore from '@/stores/useArticleStore';
import { onMounted, ref, watchEffect } from 'vue';
import { store } from '@/stores/layoutStore';
const articleStore = useArticleStore();

let articles = ref(null);

onMounted(() => {
    fetch('/api/article/all').then(res => res.json()).then(res => {
        articleStore.articles = res.data;
        articles.value = articleStore.articles.slice(0, 8);
    })
})
const onCardClick = (id, idx) => {
    store.currentPage = 'article';
    store.lastPage = 'home';
    store.articleId = id;
}

const searchInput = ref('');
watchEffect(() => {
    if (searchInput.value.length === 0) {
        articles.value = articleStore.articles.slice(0, 8);
    } else {
        articles.value = articleStore.searchArticles(searchInput.value)
    }
},{
    flush:'sync'
})

const onSearchClick = () => {
    if (searchInput.value.length === 0) {
        articles.value = articleStore.articles.slice(0, 8);
    } else {
        articles.value = articleStore.searchArticles(searchInput.value)
    }
}

const onUploadClick = async () => {
    try {
        const fileHandle = await window.showOpenFilePicker({
            multiple: false,
            excludeAcceptAllOption: true,
            types: [
                {
                    description: 'Images',
                    accept: {
                        'image/png': ['.png'],
                        'image/jpeg': ['.jpg'],
                    },
                },
            ],
        })
        const fileData = await fileHandle[0].getFile();
        let form = new FormData()
        form.append("file", fileData)
        const res = await fetch('api//disease/recognition', {
            method: 'POST',
            body: form
        }).then(res => res.json())
        searchInput.value = res.data.disease
        articleStore.updateDiseases()
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="home">
        <NavBar class="navbar" />
        <div class="banner">
            <Banner />
        </div>
        <div class="cards">
            <template v-for="(article, idx) in articles" :key="article.id">
                <Card :title="article.title" :img="article.image" @click="onCardClick(article.id, idx)"></Card>
            </template>
        </div>
        <div class="search_bar">
            <input type="text" class="search_input" v-model="searchInput">
            <button @click="onSearchClick">搜索</button>
            <button @click="onUploadClick">上传</button>
        </div>
    </div>
</template>

<style scoped>
.home {
    height: 100vh;
    width: 100vw;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.banner {
    width: 100%;
    height: 400px;
    background-color: #3f3f3f;
    position: relative;
    overflow: hidden;
}


.search_bar {
    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -30%);
    height: 60px;
    width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0.9;
}

.search_bar>button {
    width: 120px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: white;
}

.search_bar>button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}

.search_bar>input {
    height: 95%;
    width: 70%;
    border: none;
    outline: none;
    padding-left: 20px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}

.search_bar>input:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.8);
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px 20px;
    justify-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

.navbar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
}
</style>