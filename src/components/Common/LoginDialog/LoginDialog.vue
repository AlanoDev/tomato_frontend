<template>
    <div>
        <div class="login-dialog" @click="error = ''">
            <div v-if="!signup" class="dialog-content">
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
                    <button @click.prevent="onLoginClick" class="login_button">登录</button>
                    <img src="../../../assets/icon/cancel.png" @click="close('cancel')" class="img_style">
                </form>
                <p>还没有账号？<span @click="signup = true" class="link">去注册</span></p>
                <div v-if="error" class="error">{{ error }}</div>
            </div>
            <div v-else class="dialog-content">
                <h2 class="login_text">注册</h2>
                <form>
                    <div class="form-group">
                        <label for="username">用户名:</label>
                        <input type="text" id="username " v-model="signForm.username" required>
                    </div>
                    <div class="form-group">
                        <label for="email">邮箱:</label>
                        <input type="text" id="email" v-model="signForm.email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">密码:</label>
                        <input type="password" id="password" v-model="signForm.password" required>
                    </div>
                    <button @click.prevent="onSignClick" class="login_button">注册</button>
                    <img src="../../../assets/icon/cancel.png" @click="close('cancel')" class="img_style">
                </form>
                <p>已有账号？<span @click="signup = false" class="link">去登陆</span></p>
                <div v-if="error" class="error">{{ error }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useUserStore from '@/stores/useUserStore';
const userStore = useUserStore();
const props = defineProps({
    close: Function,
})
const error = ref('')
const signup = ref(false)
const loginForm = ref({
    username: '',
    password: ''
});
const signForm = ref({
    username: '',
    email: '',
    password: ''
});

const onLoginClick = () => {
    fetch("api/user/login?", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: loginForm.value.username, password: loginForm.value.password })
    })
        .then(res => res.json())
        .then(res => {
            if (res.code < 0) {
                error.value = res.msg
                return
            }
            console.log(res)
            userStore.isLogin = true;
            userStore.userId = res.data.id
            if (userStore.isLogin) {
                props.close('login')
            }
        }).catch(err => console.log(err))
}


const onSignClick = () => {
    fetch("api/user/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: signForm.value.username, email: signForm.value.email, password: signForm.value.password })
    })
        .then(res => res.json())
        .then(res => {
            if (res.code < 0) {
                error.value = res.msg
                return
            }
            userStore.isLogin = true;
            userStore.userId = res.data.id
            if (userStore.isLogin) {
                props.close('sign')
            }
        })
        .catch(err => console.log(err))
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
    width: 450px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.link {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
}

.error {
    color: red;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
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