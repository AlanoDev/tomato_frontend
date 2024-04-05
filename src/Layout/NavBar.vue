<script setup>
import LoginButton from '@/components/NavBar/LoginButton.vue';
import LoginDialog from '@/components/Common/LoginDialog';
import useUserStore from '@/stores/useUserStore';
import { store } from '@/stores/layoutStore';
import { ref } from 'vue';
const userStore = useUserStore();
const onClick = () => {
    LoginDialog.show((res) => {
        if(res=='login')
            userStore.isLogin = true;
    })
}
const onAvatarClick=()=>{
    store.currentPage='profile';
    store.lastPage='home';
}

</script>

<template>
    <div class="container">
        <div class="padding"></div>
        <LoginButton class="item" @click="onClick" v-if="!userStore.isLogin" />
        <div class="avatar" @click="onAvatarClick" v-else></div>
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
    width: 95%;
}

.item {
    height: 40px;
    flex: 1;
}

.item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.avatar {
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 50%;
    margin: 5px;
}
</style>@/stores/layoutStore