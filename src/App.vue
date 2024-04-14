<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pragati Narrow', sans-serif;
    }
    #app {
        background: url("./wallpapper.jpg");
        width: 100vw;
        height: 100vh;
    }
</style>