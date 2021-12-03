<template>
    <div class="flex md:block overflow-x-scroll overflow-y-hidden">
        <div class="md:h-screen flex flex-col items-center justify-center p-4 md:p-9 min-w-full" v-for="work in works" :key="work.id">
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
})
</script>

