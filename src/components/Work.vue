<template>
    <div >
        <div class="h-screen flex flex-col items-center justify-center" v-for="work in works" :key="work.id">
            <h1 class="text-5xl font-bold ">{{work.title}}</h1>
            <img class="my-5"  :src="work.image"/>
            <p class="text-justify text-xl">{{work.description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,Prop,PropType } from 'vue'
import Work from '../types/work'

export default defineComponent({
    props: {
        works:{
            required: true,
            type: Array as PropType<Work[]>
        },
        image:{
            type: String as PropType<string>
        }
    },
    mounted(){
        console.log(this.works[0].image)
    }
})
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');

    img{
        width: 550px;
    }
    P{
        width: 50%;
    }
</style>