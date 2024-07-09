<template class="" lang="">
    <div>
        <h1>Currently Working on:</h1>
    </div>
    <div class="md:p-0 mb-28 flex flex-col justify-center items-center text-center">
        <div class="flex flex-col md:mb-14 space-y-4">
            <h1 class="text-black font-bold text-5xl">My Experience. </h1>
            <p class="text-gray-500">
                <span class="text-xs">
                (some of the most relevant) 
                </span>
                        <br>
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
                        <h1 class="font-bold text-xl md:text-justify text-center">{{exp.title}}</h1>
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
                    <p class="md:w-2/3 text-small">{{exp.desc}}</p>
                </div>
                
            </div>
        </div>
        <Contact />
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import Experience from "../types/exp"
import Contact from './Contact.vue'

const exps = ref<Experience[]>([
            {
               id:1,title:"RSI - (Research Science Institute)", time:"2023",
               location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/us.png", location_color:"bg-red-200",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/rsi.png',
               desc:"Selected as one of the 100 most accomplished high school students worldwide, I attended the Research Science Institute (RSI) at MIT, a free summer program that blends on-campus scientific theory coursework with science and technology research."
            },
            {
               id:2,title:"Engineering Intern", time:"2022 - 2024",
               location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/us.png", location_color:"bg-red-200",
               pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/engineer.png',
               desc:"Worked on designing an expansion for Chicagoland's very own Navy Pier with GILBANE and Pepper Construction staff as mentors to present to a national ACE competition for High Schoolers , working on the development of problem-solving, engineering skills and receiving the mentorship of many talented engineers."
            },
            {
                id:3,title:"Technical Certification", time:"2019 - 2022",
                location:" - In Person.",location_src:"https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/sv.png", location_color:"bg-blue-200",
                pic:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png',
               desc:"Certified in Software Engineering and Computer Science from Instituto Tecnico Ricaldone, I gained expertise in developing multi-platform applications, mastering Software Architecture patterns, Algorithms, and Industry-Level skills."            
            },
        ])
export default defineComponent({
    name: 'Exp',
    data(){
        return {
            exps,
        }
    },
    components: {
        Contact
    }

})
</script>