<script setup>
import useState from '../hooks/useState'
const [count, setCount] = useState(0)

</script>

<template>
    <h1>{{ count }}</h1>
    <button @click="setCount(count + 1)">click me</button>
</template>

<style scoped></style>