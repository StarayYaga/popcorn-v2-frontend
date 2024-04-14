<template>
    <div v-if="users.length > 0" class="user_list">
        <h3></h3>
        <UserItem  v-for="user in users" :user="user" :key="user.id" @deleteUser="$emit('deleteUser', user)"/>
    </div>
    <h3 v-else class="user_list">Пользователей нет</h3>
</template>

<script>
export default {
    name:"User_list",
    props:{
        users:{
            type: Array,
        }
    }
}
</script>

<style scoped>
    .user_list {
        background-color: #EACDB8;
        border-radius: 40px;
        margin: 0.5vw 20px;
        padding: 0 30px;
    }
</style>