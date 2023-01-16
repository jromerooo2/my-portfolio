<template>
        <div class="container-flow flex md:block md:overflow-hidden overflow-scroll ">
            <div class=" flex flex-col items-center justify-center p-4 md:p-9 min-w-full" v-for="work in works" :key="work.id">
                <a :href="work.link !== '' ? work.link :'javascript:void(0);'" target="_blank" :class="{'cursor-default':work.link === ''}">
                    <div class="md:flex items-center space-x-5 "> 
                        <h1 :class="work.color" class="text-center" >{{work.title}}</h1>
                        <p class="text-gray-700 bg-blue-200 p-4 rounded-full md:w-1/4 text-center">{{ work.role }}</p>
                    </div>

                    <img class="my-5"  :src="work.image"/>
                    <p class="text-justify text-xl">{{work.description}}</p>
                </a>
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
    },
})
</script>

