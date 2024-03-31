<script setup>
import LoginButton from '@/components/NavBar/LoginButton.vue';
import History from '@/components/NavBar/History.vue';
import LoginDialog from '@/components/Common/LoginDialog.vue';
import { ref } from 'vue';
const showDialog=ref(false);
const onClick= () => {
    showDialog.value=true;
}



</script>

<template>
    <div class="container">
        <LoginButton  class="navlogin" @click="onClick"/>
        <History class="history"/>
        <LoginDialog :show="showDialog" @close="showDialog=false"/>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 50px;
    background-color: #18b0ec;
    position: relative;
}

.navlogin {
   position:absolute;
   right: 6%;
   top:50%;
   transform: translate(-50%,-50%);
}

.history {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(-50%,-50%);
}

</style>