<script lang="ts">
import Work from '../components/Work.vue'
import { defineComponent, ref } from 'vue'
import work from '../types/work'

export default defineComponent({
    name: 'WIVD',
    components: {
        Work
    },
    setup() {
        const works = ref<work[]>([
            {
                title: 'Programming Club',role:"Founder", description: `As part of my contribution to the STEM world I created a programming club in my high school where I teach students about programming and algorithms, while also including robotics and computer science research.`, image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/hfdev.png',color:"text-5xl font-bold text-blue-900 text-left",id:"1",link:"https://github.com/homewood-flossmoor-dev"
            },
            {
                title: 'Google Clone',role:"Practice project", description: `I made a google clone but with the famous character "Hatsune Miku" as logo for the search bar using google's API to handle searchs. As google has a paid API I used a dummy info system to not exceed google's quota per API key. `, image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/hatsune.png',color:"text-5xl font-bold bg-gradient-to-r from-red-400 to-yellow-600 text-transparent bg-clip-text mb-3 text-left", id:"4", link:"https://hatsunexgoogle.vercel.app/",
            },
            { 
                title: 'Sacculum Systems',role:"Software Developer and Researcher", description: `Sacculum is a web and desktop tool desgined to help automate hiring process and maximize opportunities to people that are looking for jobs. Available for free and with 10+ corporations that integrated the tool into their workflow. This project helped me and my teammates to win 2nd place in National Computer Science hackathon. I served as a software developer and researcher to maximize the productivity on hiring teams.`,image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/sac.png',color:"text-5xl font-bold text-green-500 text-left", id:"2",link:"https://github.com/jromerooo2/portal-bolsa-ricaldone"
            },
                        
                                    {
                title: 'Locus Systems',role:"Software Developer and Researcher", description: 'Locus is a real time location platform, designed to provide security to public transportation in El Salvador. Where I served as software developer and engineered the Webflow and communications with RTC protocols and sockets. This project helped me and my team to win the 3rd place in a national hackaton.', image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/ls.png',color:"text-5xl font-bold text-purple-500 text-left", id:"3",link:"https://github.com/jromerooo2/real-time-l18n"
            },
        ])

        return { works }
    }

})
</script>

<template class="">
    <section class="md:flex mt-14 md:mt-0">
            <div class="relative md:sticky mt-24 md:mt-0 md:flex flex-col md:h-14 items-center justify-center w-full md:min-h-screen top-0 shrink">
                <img class="collant mx-auto my-2 img " alt="Memoji Computer" src="../assets/dev.png" />
                <h1 class="md:block hidden text-4xl font-bold abt text-center md:p-5 text-blue-900">Some of the stuff <br>I've Worked on.</h1>
                <h1 class="font-bold text-2xl block sm:hidden text-center mt-8">Scroll to see my work!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="block sm:hidden icon icon-tabler icon-tabler-arrow-narrow-right mx-auto" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
            </div>

            <div class="flex">
                    <Work :works="works" />
            </div>
    </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
.img{
    height: 280px;
}

h1{
    font-family: 'Poppins', sans-serif;
}


</style>