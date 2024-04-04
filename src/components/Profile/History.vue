<script setup>
import useProfileStore from '@/stores/useProfileStore';
import HistoryItem from '@/components/Profile/HistoryItem.vue';
const store = useProfileStore();
const onDelete = (id) => {
    store.histories = store.histories.filter(item => item.id !== id);
}
</script>

<template>
    <div class="history_container">
        <template v-for="(item, index) in store.histories" :key="item.id">
            <HistoryItem :title="item.name" :id="item.id" :date="item.date" :img="item.img" @delete="onDelete" />
        </template>
    </div>
</template>

<style scoped>
.history_container {
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #dfdfdf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    overflow:scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    
}
.history_container::-webkit-scrollbar {
    display: none;
}
</style>