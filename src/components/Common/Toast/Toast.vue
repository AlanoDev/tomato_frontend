<script setup>
const props = defineProps({
    message: {
        type: String,
        default: 'default message'
    },
    close: Function,
});
</script>

<template>
    <div class="toast_container">
        <div class="inner">
            <div class="content">
                {{ props.message }}
            </div>
            <div class="close">
                <button @click="props.close">OK</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.toast_container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.inner {
    width: 300px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-left: 20px;
    padding-top: 20px;
    flex-direction: column;
    row-gap: 20px;
}
.content{
    font-size: 20px;
}
.close {
    margin-left: auto;
    margin-right: 20px;
}

.close button {
    height: 38px;
    width: 60px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;

}
.close button:hover {
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
}
</style>