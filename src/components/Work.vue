<template>
        <div class="container-flow flex md:block md:overflow-hidden overflow-scroll mb-20 md:mb-0">
            <div class="md:h-screen flex flex-col items-center justify-center p-4 md:p-9 min-w-full" v-for="work in works" :key="work.id">
                <a :href="work.link !== '' ? work.link :'javascript:void(0);'" target="_blank" :class="{'cursor-default':work.link === ''}">
                    <h1 :class="work.color" >{{work.title}}</h1>
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

