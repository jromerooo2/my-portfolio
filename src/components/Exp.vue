<template lang="">
    <div class="md:p-0 mb-28 flex flex-col justify-center items-center text-center">
        <div class="flex flex-col md:mb-14 space-y-4">
            <h1 class="text-black font-bold text-5xl">My Experience. </h1>
            <p class="">
                Awards/Programs/Education.
            </p> 
        </div>  
        <div class="">
            <div class="md:grid block md:grid-cols-3 md:items-center p-7 md:p-0" v-for="exp in exps" :v-key="exp.id">
                <div >
                    <img class="md:ml-auto mx-auto block h-60 mb-2" :src="exp.pic" alt="">
                </div>
                <div class="col-span-2 text-justify">
                    <h1 class="font-bold text-3xl md:text-justify text-center">{{exp.title}}</h1>
                    <p class="text-small text-gray-400">{{exp.time}}</p>
                    <p :class="exp.location_color" class="rounded-full" >{{ exp.location }}</p>
                    <p class="md:w-2/3">{{exp.desc}}</p>
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
               id:1,title:"Engineering Intern", time:"2022 - 2023",
               location:"United States", location_color:"bg-red-300",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."
            },
            {
                id:1,title:"Technical Certification", time:"2019 - 2022",
                location:"El Salvador", location_color:"bg-blue-300",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png',
               desc:"Technical Certification in Software Engineering and Computer Science @ Instituto Tecnico Ricaldone, where I was taught how to develop applications for different platforms with Software Architecture patterns, Algorithms and Industry-Level skills."            
            },
            { 
                id:1,title:"Code2College Program", time:"2022 - 2023",
                location:"United States - Virtual", location_color:"bg-red-300",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/love.png',
               desc:"Code2College is a program that targets those students who have previous coding experience and are ready to be challenged further. Through project-based learning and the usage of different Frameworks."   
            },
            {
                id:1,title:"2x National Hackathon awards", time:"2021 - 2022",
                location:"El Salvador", location_color:"bg-red-300",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/exp.png',
               desc:"Worked on Locus and Sacculum (projects listed above) experiencing with multiple Computer Science challenges and tools to make the projects possible."            
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