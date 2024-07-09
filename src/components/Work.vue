<template>
        <div class="container-flow flex flex-col">
            <div class="flex flex-col items-center justify-center p-4 md:p-9" v-for="work in works" :key="work.id">
                <a :href="work.link !== '' ? work.link :'javascript:void(0);'" target="_blank" :class="{'cursor-default':work.link === ''}">
                    
                    <div class="flex flex-col space-y-5"> 
                        <img class="h-64"  :src="work.image"/>
                        <h1 :class="work.color" class="" >{{work.title}}</h1>
                        <!-- <p class="text-gray-700 bg-blue-200 p-4 rounded-full md:w-1/4 text-center">{{ work.role }}</p> -->
                        <p class="text-justify">{{work.description}}</p>
                    </div>
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

