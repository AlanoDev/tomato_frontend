<script setup>
import Home from '@/Layout/Home.vue'
import Profile from '@/Layout/Profile.vue'
import Article from '@/Layout/Article.vue'
import { store } from '@/stores/layoutStore'
</script>

<template>
    <div class="layout">
        <div class="content">
            <Home v-if="store.currentPage == 'home'" />
            <Profile v-else-if="store.currentPage == 'profile'" />
            <Article v-else-if="store.currentPage == 'article'" />
        </div>
    </div>

</template>

<style scoped>
.layout {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    margin: 0 auto;
}
</style>