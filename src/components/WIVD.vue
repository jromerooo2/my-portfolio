<script lang="ts">
import Work from '@/components/Work.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WIVD',
})
</script>

<template class="body ">
    <div class="flex">
        <div class="sticky flex flex-col items-center justify-center w-full min-h-screen">
        <img class="collant mx-auto my-2" alt="Vue logo" src="../assets/dev.png" />
        <h1 class="text-4xl font-bold abt text-center p-5">What I've Been Working on.</h1>
        </div>

        </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
h1{
    font-family: 'Poppins', sans-serif;
}
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 50px;
  height: 20px;
  width: 50%;
}
p{
    width: 50%;
    padding: 50px;
}

</style>