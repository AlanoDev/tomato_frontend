<script setup>
import useProfileStore, { deleteHistory } from '@/stores/useProfileStore';
import HistoryItem from '@/components/Profile/HistoryItem.vue';
import { store } from '@/stores/layoutStore';
import { onMounted } from 'vue';
import useUserStore from '@/stores/useUserStore';
const profileStore = useProfileStore();
const onDelete = (id) => {
    deleteHistory(id);
}
const onHistoryItemClick = (id) => {
    store.currentPage = 'article';
    store.lastPage = 'profile';
    store.articleId = id;
}
onMounted(() => {
    fetch(`/api/history/${useUserStore().userId}`, {
        method: "GET"
    }).then(res => res.json()).then(res => {
        profileStore.histories = res.data;
    })

})
</script>

<template>
    <div class="history_container">
        <template v-for="item in profileStore.histories" :key="item.id">
            <HistoryItem @click="onHistoryItemClick(item.article_id)" :article_id="item.article_id" :id="item.id"
                @delete="onDelete" />
        </template>
    </div>
</template>

<style scoped>
.history_container {
    width: 98%;
    height: 98%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #dfdfdf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    overflow: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
    border-radius: 10px;
}

.history_container::-webkit-scrollbar {
    display: none;
}
</style>