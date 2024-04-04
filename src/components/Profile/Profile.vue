<script setup>
import {store} from '@/stores/layoutStore';
const onClick = () => {
    store.currentPage = 'home';
}
</script>

<template>
    <div class="profile_container">
        <div class="profile_content">
            <div class="profile_name profile_item">
                <span class="profile_label">Name:</span>
                Name
            </div>
            <div class="profile_role profile_item">
                <span class=" profile_label">Role:</span>
                Role
            </div>
            <div class="profile_email profile_item">
                <span class=" profile_label">Email:</span>
                Email
            </div>
            <div class="profile_create profile_item">
                <span class=" profile_label">CreateDate:</span>
                Date
            </div>
            <div class="profile_logout">
                <button @click="onClick">Logout</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile_container {
    width: 100%;
    height: 100%;
    background-color: #dfdfdf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.profile_content {
    width: 80%;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 40px;
}

.profile_logout {
    margin-left: auto;
    margin-right: 10px;
}

.profile_logout button {
    height: 40px;
    width: 80px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: red;
}

.profile_logout button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}

.profile_label {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    display: inline-block;
    width: 150px;
    text-align: right;
}

</style>