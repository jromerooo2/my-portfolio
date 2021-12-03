<script lang="ts">
import { defineComponent,Prop } from "vue";

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String
    }
  })
</script>

<template>
  <h1 class="h1 text-3xl text-center	mb-2 ">{{ msg }}</h1>
  <img class="collant mx-auto my-2" alt="Vue logo" src="../assets/holis.png" />
  <h1 class="text-4xl font-bold abt text-left p-5">A Junior Software Engineer from El Salvador<br>
  Interested in <span class="text-blue-500">Software Dev</span>, <span class="text-green-500">CyberSecurity</span><br> and<span class="text-purple-500"> Design</span>.</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" class="md:mt-0 mt-4 icon icon-tabler icon-tabler-arrow-down animate-bounce text-center" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
img{
  height: 300px;
}
.h1{
  font-family: 'Poppins', sans-serif;
  font-weight:400;
}
.abt{
  font-family: 'Poppins', sans-serif;

}

</style>
