<script setup>
import LoginButton from '@/components/NavBar/LoginButton.vue';
import LoginDialog from '@/components/Common/LoginDialog.vue';
import {store} from '@/stores/layoutStore';
import { ref } from 'vue';

const showDialog = ref(false);
const onClick = () => {1
    showDialog.value = true;
    store.currentPage = 'profile';
}

</script>

<template>
    <div class="container">
        <div class="padding"></div>
        <LoginButton class="item" @click="onClick" />
        <LoginDialog :show="showDialog" @close="showDialog = false" />
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    padding: 5px;
    column-gap: 10px;
}

.padding {
    flex: 23;
}

.item {
    height: 40px;
    flex: 1;
}

.item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>@/stores/layoutStore