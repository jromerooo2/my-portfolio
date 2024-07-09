<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center space-y-5">
             <img class="h-64" src="../assets/holis.png" alt="">
            <h1 class="text-xl font-bold text-start">
                Hey - I'm Juan.
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur molestias quia iusto eos, officiis, cupiditate distinctio a sapiente suscipit similique architecto voluptate eaque? Optio inventore adipisci nemo. Aut, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur molestias quia iusto eos, officiis, cupiditate distinctio a sapiente suscipit similique architecto voluptate eaque? Optio inventore adipisci nemo. Aut, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur molestias quia iusto eos,
            </p>
            <ul class="list-disc">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
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