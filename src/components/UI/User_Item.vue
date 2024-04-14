<template>
    <div class="user_item">
        <div class="id_user">ID: {{ user.id }}</div>
        <div class="user_name">ЛОГИН: {{ user.login }}</div>
        <div class="user_status">STATUS: {{ user.status }}</div>
        <button @click="deleteUser" class="delete btn">Удалить</button>
    </div>
</template>

<script>
export default {
    name:"UserItem",
    props:{
        user:{
            required: true,
            type: Object
        }
    },
    methods: {
        deleteUser(){
            this.$emit("deleteUser", this.user)
        }
    }
}
</script>

<style scoped>
    .user_item {
        display: flex;
        border-bottom: 1px black solid;
        font-size: 20px;
        margin: 20px;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
        /* text-align: center;  */
    }
    .user_name, .id_user, .user_status, .btn {
        margin: 0 10px
    }
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 15px;
        cursor:pointer ;
    }
</style>