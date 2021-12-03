<script setup lang="ts">

defineProps<{ msg: string }>()
export default{
  name: 'HelloWorld',
}

</script>

<template>
  <h1 class="h1 text-3xl text-center	mb-5 ">{{ msg }}</h1>
  <img class="collant mx-auto my-2" alt="Vue logo" src="../assets/holis.png" />
  <h1 class="text-4xl font-bold abt text-left p-5">A Junior Software Engineer from El Salvador<br>
  Interested in <span class="text-blue-500">Software Dev</span>, <span class="text-green-500">CyberSecurity</span><br> and<span class="text-purple-500"> Design</span>.</h1>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
.h1{
  font-family: 'Poppins', sans-serif;
  font-weight:400;
}
.abt{
  font-family: 'Poppins', sans-serif;

}

</style>
