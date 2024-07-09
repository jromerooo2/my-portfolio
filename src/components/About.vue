<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center space-y-5">
             <img class="h-64" src="../assets/holis.png" alt="">
            <h1 class="text-xl font-bold text-start">
                Hey - I'm Juan.
            </h1>
            <p class="text-justify">
                I am a Mechanical Engineering student and STEM enthusiast with a strong background in technology, and computer science. I am always looking for things to hack into. I enjoy all types of sports. I consistently follow soccer, basketball, surfing, and football.
            </p>
            <hr class="border-t border-gray-300 my-4">
            <div class="space-y-6">
            <div>
                    <h2 class="font-bold text-lg">
                        I am currently reading 📚:
                    </h2>
                    <ul class="list-disc">
                        <li>Starry Messenger - Neil deGrasse Tyson</li>
                        <!-- <li>Algorithmic Trading</li>
                        <li>Web Development</li> -->
                    </ul>
                </div>
                <div>
                    <h2 class="font-bold text-lg">
                        I could talk for hours about 💬:
                    </h2>
                    <ul class="list-disc">
                       <li>Algorithmic Trading</li>
                       <li>Mathematics</li>
                       <li>Finance</li>
                        <li>Web Development</li>
                        <li>Computer Science</li> 
                    </ul>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'AboutMe',
    components: {
        // Header,
        // WIVD,
        // Contact,
        // Exp,
        // HelloWorld
    }
})
</script>
<style>
hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:#d2d2d0;
  height: 1px;
}
</style>