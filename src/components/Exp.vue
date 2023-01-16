<template lang="">
    <div class="md:p-0 mb-28 flex flex-col justify-center items-center text-center">
        <div class="flex flex-col md:mb-14 space-y-4">
            <h1 class="text-black font-bold text-5xl">My Experience. </h1>
            <p class="">
                Awards/Programs/Education.
            </p> 
        </div>  
        <div class="">
            <div class="grid grid-cols-2 text-justify items-center" v-for="exp in exps" :v-key="exp.id">
                <div>
                    <img class="mx-auto block" :src="exp.pic" alt="">
                </div>
                <div class="">
                    <h1 class="font-bold text-3xl">{{exp.title}}</h1>
                    <p class="text-small text-gray-400">{{exp.time}}</p>
                    <p class="w-2/3">{{exp.desc}}</p>
                </div>

            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import Experience from "../types/exp"

const exps = ref<Experience[]>([
            {
               id:1,title:"ACE Engineering Intern", time:"2019 - 2023",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."
            },
            {
                id:1,title:"Technical Certification", time:"2019 - 2023",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."            
            },
            { 
                id:1,title:"Code2College Program", time:"2019 - 2023",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."   
            },
            {
                id:1,title:"Senior C.S./Math Leader", time:"2019 - 2023",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."            
            },
        ])
export default defineComponent({
    name: 'Exp',
    data(){
        return {
            exps
        }
    }

})
</script>