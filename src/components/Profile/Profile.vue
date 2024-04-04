<script setup>
import { store } from '@/stores/layoutStore';
import useProfileStore from '@/stores/useProfileStore';
import { reactive } from 'vue';
const profileStore = useProfileStore();
const userInfo = reactive({
    name: profileStore.name,
    email: profileStore.email,
    createDate: profileStore.createDate,
})
const onClick = () => {
    profileStore.name = userInfo.name;
    profileStore.email = userInfo.email;
    profileStore.createDate = userInfo.createDate;
}
</script>

<template>
    <div class="profile_container">
        <div class="profile_content">
            <div class="profile_save">
                <button @click="onClick">Save</button>
            </div>
            <div class="profile_name profile_item">
                <span class="profile_label">Name:</span>
                <input type="text" name="" id="" v-model="userInfo.name">
            </div>
            <div class="profile_role profile_item">
                <span class=" profile_label">Role:</span>
                <input disabled :value="profileStore.role">
            </div>
            <div class="profile_email profile_item">
                <span class=" profile_label">Email:</span>
                <input type="text" name="" id="" v-model="userInfo.email">
            </div>
            <div class="profile_create profile_item">
                <span class=" profile_label">CreateDate:</span>
                <input type="date" name="" id="" v-model="userInfo.createDate" />
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
    align-items: center;
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

.profile_item input {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    background-color: #f0f0f0;
    text-align: center;
}

.profile_item input:disabled {
    background-color: gray;
}

.profile_save button {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: green;
    box-sizing: border-box;
}

.profile_save button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}

.profile_save {
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: -115px;
}
</style>