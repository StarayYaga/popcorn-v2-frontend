<template>
    <div class="auth_main">
        <div class="auth">
            <h2>Авторизируйтесь</h2>
            <div class="login">
                <input v-model="model.login" type="text" class="input login" placeholder="Введите логин" size="25">
            </div>
            <div class="passwd">
                <input v-model="model.password" type="text" v-on:keyup.enter="login" class="input passwd" placeholder="Введите пароль" size="25">
            </div>
            <button class="btn send" @click="login">Отправить</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name:" Auth",
    data(){
        return {
            model: {
                login: null,
                password: null
            }
        }
    },
    methods: {
        login(){
            console.log(process.env.HOST)
            axios.post(process.env.host+"/auth/login", {login: this.model.login, password: this.model.password})
            .then(response =>{
                // console.log(response.data)
                localStorage.access_token=response.data.token

                this.$router.push("/")
            })
        }
    }
}

</script>

<style scoped>
    .auth_main{
        display: flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        height: 85vh;
    }
    .auth {
        text-align: center;
        background-color: #EACDB8;
        padding: 30px;
        border-radius: 30px;
    }
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin: 20px 0;
        border-radius: 15px;
    }
    ::placeholder {
        text-align: center; 
        text-transform: uppercase;
    }

    .input {
        border: none;
        background: none;
        border-bottom: solid black 2px;
        margin: auto;
    }
</style>