<script lang="ts">
import { defineComponent,Prop } from "vue";

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String
    }
  })
</script>

<template class="">
  <div class="flex items-center justify-center space-x-6">
    <div>
      <img class="h-24 w-24 rounded-full" alt="Profile Picture" src="../assets/juanito.jpg" />
    </div>
    <div class="text-start">
        <h1 class="h1 text-3xl mb-2 text-start font-bold">{{ msg }}</h1>
        <p class="font-lg text-gray-500">Mechanical Engineering student</p>
    </div>
  </div>  
  <hr class="border-t border-gray-300 my-4">
  <div class="space-y-6">
    <p>
      Hey, I am Juan Romero. A MechE student and all things stem afficionado. I love tech, finance and science. One of my favorite things to do is to hack into random projects to learn something new!.
    </p>
    <p>
      You can learn more <RouterLink to="/aboutme" class="text-blue-400" >about me</RouterLink> and take a look at some of my <RouterLink to="/exp" class="text-blue-400">experience</RouterLink> and <a href="https://medium.com/@jromerooo2" class="text-blue-400">blog posts</a> as well.
    </p>
  </div>
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
hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:#d2d2d0;
  height: 1px;
}
</style>
