<script setup>
import LoginButton from '@/components/NavBar/LoginButton.vue';
import History from '@/components/NavBar/History.vue';


</script>

<template>
    <div class="container">
        <LoginButton class="navlogin"/>
        <History class="history"/>
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