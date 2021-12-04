<template lang="">
    <div class="md:p-0 p-3 min-h-screen flex flex-col justify-center   items-center text-center">
        <div class="flex flex-col md:mb-14">
            <h1 class="text-black font-bold text-5xl">Let's Talk 🗣️. </h1>
            <p class="">
                Here you can find how to connect with me 🔗.
            </p> 
        </div>   
        <div class="flex items-center justify-center ">
            <div class="">
                <a @click="redirect(3)" class=" flex items-center text-3xl font-bold cursor-pointer text-blue-500 md:text-black md:hover:text-blue-500">
                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="104" height="104" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                    <span>LinkedIn</span>
                </a>
                <a @click="redirect(1)" class=" flex items-center justify-center text-3xl font-bold cursor-pointer text-black hover:text-purple-500 text-purple-500 md:text-black">
                    <span>Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="104" height="104" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a @click="redirect(2)" class=" flex items-center text-3xl font-bold cursor-pointer md:hover:text-blue-500  text-blue-500 md:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="104" height="104" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    <span>Twitter</span>
                </a>
                <a @click="redirect(4)" class=" flex items-center text-3xl font-bold cursor-pointer  text-yellow-500 md:text-black md:hover:text-yellow-500">
                    <span>E-mail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="104" height="104" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                        </svg>
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Contact',
    methods: {
        redirect(num:number){
             if (num === 1) {
               window.open('https://www.github.com/jromerooo2', '_blank')?.focus();

            } 
            if (num === 2) {
               window.open('https://www.twitter.com/jromerooo2', '_blank')?.focus();
            }
            if (num === 3) {
               window.open('https://www.linkedin.com/in/juan-romero-926621202/', '_blank')?.focus();
            }
            if (num === 4) {
               window.open('mailto:hellojuancho75@gmail.com', '_blank')?.focus();
                
            }
        }
    }

})
</script>

<style scoped>
    
</style>