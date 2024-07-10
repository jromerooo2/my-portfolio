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
                title: 'Sacculum Systems',role:"Software Developer and Researcher", description: `Sacculum is a free web and desktop tool designed to automate the hiring process and enhance job opportunities, especially in El Salvador, where the process is often tedious and opportunities are scarce. Integrated by over 10 corporations, it helped us win 2nd place in a National Computer Science hackathon.`,image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/dev/src/assets/sac.svg',color:"text-xl font-bold text-green-500 text-left", id:"2",link:"https://github.com/jromerooo2/portal-bolsa-ricaldone"
            },
            
            {
                title: 'Locus Systems',role:"Software Developer and Researcher", description: 'Locus is a real-time location platform aimed at enhancing public transportation security in El Salvador. I served as a software developer, engineering the Webflow and communications using RTC protocols and sockets. This project earned my team 3rd place in a national hackathon.', image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/dev/src/assets/ls.svg',color:"text-xl font-bold text-purple-500 text-left", id:"3",link:"https://github.com/jromerooo2/real-time-l18n"
            },
            {
                title: 'Programming Club',role:"Founder", description: `Looking for a community to join, I noticed the lack of a space for students to engage in Computer Science discussions/learning. So I decided to create a club where I taught students about programming and algorithms, while also including robotics and computer science research.`, image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/hfdev.png',color:"text-xl font-bold text-blue-900 text-left",id:"1",link:"https://github.com/homewood-flossmoor-dev"
            },
        ])

        return { works }
    }

})
</script>

<template class="">
    <div class="">
        <h1 class="font-bold text-2xl">
            What I'm up to
        </h1>
        <p>
            A list of some of my favorite projects or things I'm currently working on. You can click on them to see more information/code behind them.
        </p>
        <section class="md:flex mt-14 md:mt-0">
                <div class="flex">
                        <Work :works="works" />
                </div>
        </section>
    </div>
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