<script setup>
import LeftNavigationBar from '@/components/Profile/LeftNavigationBar.vue';
import Articles from '@/components/Profile/Articles.vue';
import History from '@/components/Profile/History.vue';
import Profile from '@/components/Profile/Profile.vue';
import Edit from '@/components/Profile/Edit.vue';
import useProfileStore from '@/stores/useProfileStore';
import { store } from '@/stores/layoutStore';
const profileStore = useProfileStore();
</script>

<template>
    <div class="container">
        <LeftNavigationBar />
        <div class="profile_content">
            <History v-if="profileStore.currentIndex == 0" />
            <Profile v-else-if="profileStore.currentIndex == 1" />
            <Articles v-else-if="profileStore.currentIndex == 2" />
            <Edit v-else-if="profileStore.currentIndex == 3" />
        </div>
        <div class="profile_operation">
            <button @click="store.currentPage = 'home'">Home</button>
            <button @click="store.currentPage = 'home'">Logout</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 90vw;
    height: 100vh;
    background-color: #dfdfdf;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    border-radius: 10px;
}

.profile_content {
    width: 80%;
    height: 100%;
    background-color: pink;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile_operation {
    position: absolute;
    right: -85px;
    top: 1%;
    width: 80px;
    height: 150px;
    background-color: #dfdfdf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    row-gap: 20px;
}

.profile_operation button {
    width: 70px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
    background-color: red;
}

.profile_operation button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
</style>