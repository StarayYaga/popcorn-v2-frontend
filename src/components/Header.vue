
<template>
    <div class="header">
        <div class="btns">
            <button class="home btn" @click="home"><h3>HOME</h3></button>

        </div>
        <div class="title"> 
            <h3>Popcorn</h3> 
        </div>
        <div class="btns">
            <button class="logout btn" @click='logout'><h3>LOG OUT</h3></button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
        
        }
    },
    methods:{
        logout(){
            localStorage.access_token=''
            this.$router.push("/login")
        },
        home(){
            this.$router.push("/")
        }

    
    },

    mounted(){
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        background: #EACDB8 0.7%;
        padding: 10px;
        
    }
    .title {
        font-size: 20px;
        font-weight: 100;
    }
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;
        cursor:pointer ;
    }

</style>