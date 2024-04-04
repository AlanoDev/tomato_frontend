<script setup>
import LeftNavigationBar from '@/components/Profile/LeftNavigationBar.vue';
import Articles from '@/components/Profile/Articles.vue';
import History from '@/components/Profile/History.vue';
import Profile from '@/components/Profile/Profile.vue';
import Edit from '@/components/Profile/Edit.vue';
import useProfileStore from '@/stores/useProfileStore';
const store = useProfileStore();
</script>

<template>
    <div class="container">
        <LeftNavigationBar />
        <div class="profile_content">
            <History v-if="store.currentIndex == 0" />
            <Profile v-else-if="store.currentIndex == 1" />
            <Articles v-else-if="store.currentIndex == 2" />
            <Edit v-else-if="store.currentIndex == 3" />
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
    overflow: hidden;
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
</style>