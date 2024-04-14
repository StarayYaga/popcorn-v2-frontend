<template>
    <div class="grafic">
        <div class="stat" :style=itemStat.style>
            <div class="load">
                {{ itemStat.count +" "+ itemStat.system }}
            </div>
        </div>
        {{ itemStat.name }} 
    </div>
</template>

<script>
export default {
    name:"grafic",    
    props:{
        itemStat:{
            required:true,
            type: Object,
        },
    },

    methods:{
        getColor(num){
            if (num <= 45){
                return '#00CA14'
            } else if (num <=75){
                return '#FFE601'
            } 
            return '#FF0000'
        }
    },

}
</script>

<style scoped>
    .grafic{
        display: grid;
        font-weight: bold;
        margin: 10px;
        text-transform: uppercase;
        
    }
    .stat {
        width: 80px;
        aspect-ratio: 1;
        position: relative;
        display: inline-grid;
        place-content: center;
        margin: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .stat:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        inset: 0;
        background: conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
        -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
                mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
    }
</style>