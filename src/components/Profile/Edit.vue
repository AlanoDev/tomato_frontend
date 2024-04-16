<script setup>
import useProfileStore from '@/stores/useProfileStore';
import useArticleStore from '@/stores/useArticleStore';
import useUserStore from '@/stores/useUserStore';
import Toast from '@/components/Common/Toast'
import { getAllDisease } from '@/api/api';
import { onMounted, reactive, ref, watchEffect } from 'vue';
const profileStore = useProfileStore();
const userSotre = useUserStore();
const articleStore = useArticleStore();

const articleInfo = reactive({
    title: "",
    content: "",
    image: "",
    disease: -1,
})
let allDisease = ref([])
let selectedDisease = ref(-1);

onMounted(() => {
    getAllDisease().then(res => {
        if (res.error == '') {
            allDisease.value = res.data;
        }
    })
})

const article = articleStore.articles.find(item => item.id == profileStore.editId) || { title: "", content: "", image: "", disease: -1 };
articleInfo.title = article.title;
articleInfo.content = article.content;
articleInfo.image = article.image;
articleInfo.disease = article.disease;

watchEffect(() => {
    articleInfo.disease = selectedDisease.value;
})

const onResetClick = () => {
    articleInfo.title = article.title;
    articleInfo.content = article.content;
    articleInfo.image = article.image;
    articleInfo.disease = article.disease;
}

const onSaveClick = () => {
    if (profileStore.editId == undefined) {
        articleStore.addArticle(articleInfo)
    } else {
        article.title = articleInfo.title;
        article.content = articleInfo.content;
        article.image = articleInfo.image;
        article.disease = articleInfo.disease;
        articleStore.updateArticle(profileStore.editId, article)
    }
    Toast.show({
        message: "save success",
    }, () => { })
}
const onImgClick = async () => {
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
        const formData = new FormData();
        formData.append('file', fileData);
        fetch('/api/file/' + userSotre.userId, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(res => {
            articleInfo.image = res.data.link;
        })
    }
    catch (err) {
        console.log(err);
    }
}

</script>

<template>
    <div class="edit_container">
        <div class="edit_title">
            <label>Title:</label>
            <input type="text" v-model="articleInfo.title">
            <label>Disease:</label>
            <select v-model="selectedDisease">
                <template v-for="item in allDisease" :key="item.id">
                    <option :selected="item.id == articleInfo.disease" :value="item.id">{{ item.title }}</option>
                </template>
            </select>
        </div>
        <div class="edit_img" @click="onImgClick">
            <label>Cover:</label>
            <img :src="articleInfo.image" alt="">
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

.edit_img {
    width: 100%;
    height: 18%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 0 20px;
    box-sizing: border-box;
    column-gap: 20px;
}

.edit_img img {
    width: 150px;
    height: 150px;
}

.edit_img label {
    font-size: 20px;
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
    height: 70%;
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