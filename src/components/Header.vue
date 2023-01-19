<script lang="ts">
import { defineComponent } from 'vue';
import { toNumber } from '@vue/shared'

const links = {
            1:'https://www.github.com/jromerooo2',
            2:'https://www.twitter.com/jromerooo2',
            3:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/resume.pdf',
}

export default defineComponent({
    name: 'Header',
    data(){
        return {links}
    },
    methods: {
        redirect(num: number) {
            window.open(this.links[num as keyof typeof toNumber], '_blank')?.focus()
    },
    }
})
</script>


<template>
    <div class="md:flex justify-evenly md:space-x-5 md:p-5">   
        <div class="flex items-center justify-center group cursor-pointer space-x-3 md:space-x-5"
        @click="redirect(3)">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook h-8 w-8 group-hover:text-yellow-600" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                <line x1="13" y1="8" x2="15" y2="8" />
                <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
                <p class="group-hover:text-yellow-600">Resume</p>

        </div>
        <div class="flex items-center justify-center group cursor-pointer space-x-3 md:space-x-5 my-5 md:mt-0">
                <a @click="redirect(1)" class="hover:text-purple-600" to="github.com/jromerooo2" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github " width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a @click="redirect(2)" target="_blank" class="hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter " width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                </a>
        </div>
            
    </div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
    p{
        font-family: 'Poppins', sans-serif;
    }
    h1{
        font-family: 'Poppins', sans-serif;
    }
</style>