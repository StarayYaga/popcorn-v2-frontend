<template>
    <div class="main">
            <div class="grafics">
                <div class="grafic_first layer">
                    <grafic :itemStat="stats_req[0]"/>
                    <grafic :itemStat="stats_req[1]"/>
                </div>
                <div class="grafic_second layer">
                    <grafic :itemStat="stats_req[2]"/>
                    <grafic :itemStat="stats_req[3]"/>
                </div>
                
            </div>
            <service_list :services="services_req" @change="change"  @removeService="remove" @add_service="add_new_service"/>
            <add_new_user @add_user="add_user"/>
            <User_list :users="users" @deleteUser="deleteUser"/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Main",
    data() {
        return {
            services_req: [],
            stats_req: [],
            users: []
        };
    },
    // #FFE601 - желтый, #FF0000 -красный, #00CA14 - зеленый
    methods: {
        async remove(service) {
            console.log(service);
            this.services_req = this.services_req.filter(s => s.id !== service.id);
            try{
                await axios.post(process.env.HOST+"/api/deleteService", {id: service.id}, {headers: {
                  'Authorization': `Bearer ${localStorage.access_token}`
                }})
            }catch{
                this.$router.push("/login")
            }
            
        },

        change(data){
            this.services_req = this.services_req.filter(service => {
                if (service.name == data.name){
                    service.statusSwitchIs = String(data.change).toUpperCase()      
                }
            })
            if (data.statusSwitchIs=="START"){
                data.statusSwitchIs = 'STOP'
                data.change="stop"
            } else{
                data.statusSwitchIs = 'START'
                data.change="start"
            }
            axios.post(process.env.HOST+"/api/change", {name: data.name, status: data.change}, {headers: {
                'Authorization': `Bearer ${localStorage.access_token}`
            }})
            
        },

        async deleteUser(user){
            
            this.users = this.users.filter(s => s.id !== user.id);
            axios.post(process.env.HOST+"/users/delete", {id: user.id}, {headers: {
                  'Authorization': `Bearer ${localStorage.access_token}`
            }})
        },

        add_user(user){
            if (!user.login =="" && !user.password=="" && !user.status==""){
                this.users.push(user)
                axios.post(process.env.HOST+"/auth/registration", user, {headers: {
                    'Authorization': `Bearer ${localStorage.access_token}`
                }}
            )
            }
            
        },

        async fetchData(){
            try {
                const req = await axios.get(process.env.HOST+"/api/all", {headers: {
                  'Authorization': `Bearer ${localStorage.access_token}`
                }})
                this.stats_req = req.data.system
                this.services_req = req.data.services
                
            }catch {
                this.$router.push("/login")
            }
        },

        async fetchUsers(){
            try {
                const req = await axios.get(process.env.HOST+"/users/all", {headers: {
                  'Authorization': `Bearer ${localStorage.access_token}`
                }})
                this.users = req.data
            } catch {
                this.$router.push("/login")
            }
        },

        async add_new_service(name){
            try{
                await axios.post(process.env.HOST+"/api/createService", {name: name}, {headers: {
                    'Authorization': `Bearer ${localStorage.access_token}`
                    }}
                )
            } catch{
                this.$router.push("/login")
            }
        }
    },

    async beforeMount(){
        await this.fetchData()
        await this.fetchUsers()
    },
    async mounted() {
        await setInterval(()=>{this.fetchData();this.fetchUsers();}, 1000)
    },
}
</script>

<style scoped>
    .main{
        align-items: center;
        text-align: center;
        width: 100vw;
        display: grid;
        grid-template-columns: auto auto;
        padding: 0 10vw;

    }
    
    .grafics {
        margin: 0.5vw 5vw;
    }
    .layer {
        background-color: #EACDB8;
        border-radius: 40px;
        margin: 20px 0;
        padding: 0 30px;
        display: flex;
        justify-content: center;
    }
    
</style>