<script setup>
import Home from '@/Layout/Home.vue'
import Profile from '@/Layout/Profile.vue'
import { store } from '@/stores/layoutStore'
</script>

<template>
    <div class="layout">
        <div class="content">
            <Home v-if="store.currentPage == 'home'" />
            <Profile v-else-if="store.currentPage == 'profile'" />
        </div>
    </div>

</template>

<style scoped>
.layout {
    width: 100%;
    background-color: #f0f2f5;
    margin: 0 auto;
}
</style>@/stores/layoutStore