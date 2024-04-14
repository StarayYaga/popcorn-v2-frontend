<template>
    <div class="add_new_user">
        <h3>Добавить нового пользователя</h3>
        <div class="login div_input">
            <h3>Логин</h3>
            <input v-model="new_user.login" class="input input_login" type="text" placeholder="login">
            
        </div>
        <div class="password div_input">
            <h3>Пароль</h3>
            <input v-model="new_user.password" class="input input_password" type="text" placeholder="password">
        </div>
        <div class="status div_input">
            <h3>Статус</h3>
            <input v-model="new_user.status" v-on:keyup.enter="add_user" class="input input_status" type="text" placeholder="status">
        </div>
        <button class="btn" @click="add_user">Добавить</button>
    </div>
</template>

<script>

export default {
    name:'add_new_user',
    data(){
        return{
            new_user:{
                login:"",
                password:"",
                status: "",
            }
        }
    },
    methods:{
        add_user(){
            this.$emit("add_user", this.new_user)
            this.new_user={
                login:"",
                password:"",
                status: "",
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;
        cursor:pointer ;
    }
    .add_new_user {
        background: #EACDB8;
        margin: 0.5vw 5vw;
        padding: 10px;
        border-radius: 40px;
    }
    ::placeholder {
        text-align: center; 
        text-transform: uppercase;
    }

    .div_input{
        margin-top: 20px;
    }

    .input {
        border: none;
        background: none;
        border-bottom: solid black 2px;
    }
</style>