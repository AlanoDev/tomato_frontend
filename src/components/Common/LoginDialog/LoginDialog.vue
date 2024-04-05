<template>
    <div>
        <div class="login-dialog">
            <div class="dialog-content">
                <h2 class="login_text">登录</h2>
                <form>
                    <div class="form-group">
                        <label for="username">用户名:</label>
                        <input type="text" id="username " v-model="loginForm.username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">密码:</label>
                        <input type="password" id="password" v-model="loginForm.password" required>
                    </div>
                    <button @click="onClick" class="login_button">登录</button>
                    <img src="../../../assets/icon/cancel.png" @click="close('cancel')" class="img_style">
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    close: Function,
})
const loginForm = ref({
    username: '',
    password: ''
});

const onClick = () => {
    fetch("api/user/login?" + `name=${loginForm.value.username}&password=${loginForm.value.password}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    props.close("login");
}

</script>

<style scoped>
.login-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 10;
    width: 350px;
    height: 300px;
}

.dialog-content {
    max-width: 300px;
    margin: 0 auto;
}

.login_text {
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

input[type="text"],
input[type="password"] {
    width: 90%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.login_button {
    width: 98%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;

}

.login_button:hover {
    background-color: #0056b3;
}

.img_style {
    width: 15px;
    height: 15px;
    position: absolute;
    /* Position the cancel button */
    top: 15px;
    /* Adjust top position */
    right: 15px;
    /* Adjust right position */
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>