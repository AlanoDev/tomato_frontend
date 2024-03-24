<template>
    <div class="card">
        <img src="../../../src/assets/1.jpeg" alt>
        <h3>标题 </h3>
    </div>
</template>
  
<script>
export default {
    // data() {
    //     return {
    //         list: [
    //             {
    //                 value: '0',
    //                 src: "../../../src/assets/1.jpeg",
    //                 title: "番茄病害",
    //             },
    //             {
    //                 value: '0',
    //                 src: "../../../src/assets/2.jpeg",
    //                 title: "番茄病害",
    //             }, {
    //                 value: '0',
    //                 src: "../../../src/assets/3.jpeg",
    //                 title: "番茄病害",
    //             },
    //             {
    //                 value: '0',
    //                 src: "../../../src/assets/3.jpeg",
    //                 title: "番茄病害",
    //             },
    //         ]
    //     }
    // }
}
</script>
  
<style scoped>
.card {
    width: 270px;
    height: 170px;
    text-align: center;
    padding: 3px;
    list-style: none;
    /* border: 0px solid #ded2d2; */
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(41, 40, 40, 0.5);
    position: relative;

}

.card:hover{
    background-color: #ececf7;
}

img {
    width: 250px;
    height: 140px;
    object-fit: cover;
}

h3 {
    margin-top: 10px;
    position: absolute;
    top: 140px;
}

</style>
