<script setup>
import useProfileStore from '@/stores/useProfileStore';
const store = useProfileStore();
</script>

<template>
    <div class="navigation_bar">
        <div class="navigation_avatar"></div>
        <div class="navigation_info">
            <div class="info_item">{{ store.name }}</div>
            <div class="info_item">{{ store.role }}</div>
        </div>
        <div class="navigation_divider"></div>
        <template v-for="(item, index) in store.items">
            <div class="navigation_item" :class="{ navigation_item_active: store.currentIndex == index }"
                @click="() => { store.currentIndex = index }">
                <p>{{ item }}</p>
            </div>
        </template>
    </div>
</template>

<style scoped>
.navigation_bar {
    box-sizing: border-box;
    height: 100%;
    width: 20%;
    background-color: #3f3f3f;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-top: 10px;
    align-items: center;
    border-radius: 10px;
}

.navigation_item {
    width: 90%;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.navigation_item_active {
    background-color: gray;

}

.navigation_avatar {
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
}

.navigation_info {
    display: flex;
    column-gap: 10px;
    margin: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.info_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 5px 20px;
    background-color: white;
    border-radius: 5px;
    color: gray;
    opacity: 0.8;
}

.navigation_divider {
    width: 90%;
    height: 1px;
    background-color: white;
    margin: 5px 0;
    opacity: 0.4;
    margin-bottom: 20px;
}
</style>