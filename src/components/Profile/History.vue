<script setup>
import useProfileStore from '@/stores/useProfileStore';
import HistoryItem from '@/components/Profile/HistoryItem.vue';
import { store } from '@/stores/layoutStore';
const profileStore = useProfileStore();
const onDelete = (id) => {
    profileStore.histories = profileStore.histories.filter(item => item.id !== id);
}
const onHistoryItemClick = (id) => {
    store.currentPage = 'article';
    store.lastPage = 'profile';
    store.articleId = id;
}
</script>

<template>
    <div class="history_container">
        <template v-for="(item, index) in profileStore.histories" :key="item.id">
            <HistoryItem @click="onHistoryItemClick(item.id)" :id="item.id" :date="item.date" @delete="onDelete" />
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