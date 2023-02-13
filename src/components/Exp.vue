<template lang="">
    <div class="md:p-0 mb-28 flex flex-col justify-center items-center text-center">
        <div class="flex flex-col md:mb-14 space-y-4">
            <h1 class="text-black font-bold md:text-7xl text-6xl text-green-700">My Experience. </h1>
            <p class="">
                Awards/Programs/Education.
            </p> 
        </div>  
        <div class="">
            <div class="md:grid block md:grid-cols-3 md:items-center p-7 md:p-0" v-for="exp in exps" :v-key="exp.id">
                    <div>
                        <img class="md:ml-auto mx-auto block h-60 mb-2" :src="exp.pic" alt="">
                    </div>
                <div class="col-span-2 text-justify">
                    <div class="md:flex items-center space-x-4 my-3 space-y-3 md:space-y-0 md:my-0">
                        <h1 class="font-bold text-3xl md:text-justify text-center">{{exp.title}}</h1>
                        <div class="flex items-center justify-center md:p-3 p-0 space-x-4">
                            <p class="text-small text-gray-400">{{exp.time}}</p>
                            <p :class="exp.location_color" class="rounded-full py-2 px-3 flex items-center space-x-2" >
                                <img class="h-4" :src="exp.location_src" />
                                
                                <span>
                                    {{ exp.location }}
                                </span>
                            </p>
                        </div>
                    </div>
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
               id:1,title:"RSI - (Research Science Institute)", time:"2023",
               location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/us.png", location_color:"bg-red-200",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/rsi.png',
               desc:"Selected to be part of 100 world's most accomplished high school students that gather at the Massachusetts Institute of Technology (MIT) for the Research Science Institute (RSI). RSI is a summer science & engineering program to combine on-campus course work in scientific theory with off-campus work in science and technology research."
            },
            {
               id:2,title:"Engineering Intern", time:"2022 - Present",
               location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/us.png", location_color:"bg-red-200",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Currently working on some ACE projects with GILBANE staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers working in GILBANE and associates."
            },
            {
                id:3,title:"Technical Certification", time:"2019 - 2022",
                location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/sv.png", location_color:"bg-blue-200",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png',
               desc:"Technical Certification in Software Engineering and Computer Science @ Instituto Tecnico Ricaldone, where I was taught how to develop applications for different platforms with Software Architecture patterns, Algorithms and Industry-Level skills."            
            },
            { 
                id:4,title:"Code2College Program", time:"2022 - Present",
                location:" - Virtual.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/us.png", location_color:"bg-red-200",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/love.png',
               desc:"Code2College is a program that targets those students who have previous coding experience and are ready to be challenged further. Through project-based learning and the usage of different Frameworks."   
            },
            {
                id:5,title:"2x National Hackathon awards", time:"2021 - 2022",
                location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/sv.png", location_color:"bg-blue-200",
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