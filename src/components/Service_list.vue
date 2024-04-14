<template>
    <div v-if="services.length <8" class="services">
        <Service v-for="service in services" :service="service" :key="service.id" @change="$emit('change', service)" @removeService="$emit('removeService', service)"/>
        <div class="add_service">
            <h4>Добавить сервис</h4>
            <h5>Название</h5>
            <input v-model="name" class="input input_service" type="text" placeholder="name">
            <button @click="add_new_servie" class="btn">Добавить</button>
        </div>
    </div>
    <div v-else class="services">
        <Service v-for="service in services" :service="service" :key="service.id" @change="change" @removeService="$emit('removeService', service)"/>
    </div>
</template>

<script>
export default {
    name:"service_list",
    props:{
        services:{
            type:Array,
            required: true,
        }

    },
    data(){
        return {
            name:""
        }
    },
    methods:{
        add_new_servie(){
            this.$emit("add_service", this.name)
        },
        statusSwitch(service){
            this.$emit("change", service)
        },
    }

}
</script>

<style scoped>
    .services {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .btn {
        border: none;
        background-color: white;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;
        cursor:pointer ;
    }
    ::placeholder {
        text-align: center; 
        text-transform: uppercase;
    }

    .add_service{
        background: #EACDB8;
        margin: 0.5vw;
        padding: 10px;
        border-radius: 25px;
        width: 220px;
    }

    .input {
        border: none;
        background: none;
        border-bottom: solid black 2px;
    }
</style>