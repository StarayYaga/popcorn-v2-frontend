<template>
    <div class="service">
        <h3 class="name">{{ service.name }}</h3>
        <h4 class="status">{{ service.status }}</h4>
        <div class="btns">
            <button @click="removeService" class="delete btn">Удалить</button>
            <button @click="change" class="start_stop btn">{{ service.statusSwitchIs }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Service",
    props:{
        service:{
            required: true,
            type: Object,
        },
    },
    methods:{
        change(){
            this.$emit('change', this.service)
        },
        removeService(){
            this.$emit("removeService", this.service)
        }
    },
    data(){
        return{
          
        }
    },

}
</script>

<style scoped>
    .service{
        background: #EACDB8;
        margin: 0.5vw;
        padding: 10px;
        border-radius: 25px;
        width: 220px;
    }
    .btns{
        display: flex;
        margin-top: 10px;
        justify-content: center;
    }
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;
        cursor:pointer ;
    }
    .status{
        text-transform: uppercase;
    }
</style>