<script setup>
import LeftNavigationBar from '@/components/Profile/LeftNavigationBar.vue';
import Articles from '@/components/Profile/Articles.vue';
import History from '@/components/Profile/History.vue';
import Profile from '@/components/Profile/Profile.vue';
import Favorite from '@/components/Profile/Favorite.vue';
import Edit from '@/components/Profile/Edit.vue';
import useProfileStore, { clearProfileUserInfo } from '@/stores/useProfileStore';
import useUserStore from '@/stores/useUserStore';
import { store } from '@/stores/layoutStore';
const profileStore = useProfileStore();
const userStore = useUserStore();
const onLogOut = () => {
    userStore.isLogin = false;
    userStore.userId = undefined;
    store.currentPage = 'home';
    clearProfileUserInfo();
}


</script>

<template>
    <div class="container">
        <LeftNavigationBar />
        <div class="profile_content">
            <History v-if="profileStore.currentIndex == 0" />
            <Profile v-else-if="profileStore.currentIndex == 1" />
            <Favorite v-else-if="profileStore.currentIndex == 2" />
            <Articles v-else-if="profileStore.currentIndex == 3" />
            <Edit v-else-if="profileStore.currentIndex == 4" />
        </div>
        <div class="profile_operation">
            <button @click="store.currentPage = 'home'">Home</button>
            <button @click="onLogOut">Logout</button>
            <button @click="() => {
                profileStore.currentIndex = 4
                profileStore.editId = undefined
            }">Publish</button>
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
    background-color: #dfdfdf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px 0;
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