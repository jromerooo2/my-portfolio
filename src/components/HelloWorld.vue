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
  <div class="md:flex items-center justify-center">
    <div>
      <img class="block collant mx-auto my-2" alt="Vue logo" src="../assets/holis.png" />
    </div>
    <div class="text-center">
        <h1 class="h1 text-3xl text-center	mb-2 ">{{ msg }}</h1>
        <h1 class="text-4xl font-bold abt  p-5 md:block hidden ">A High School Student<br>
    Interested in <span class="text-blue-500">Software Dev</span>, <span class="text-green-500">Engineering</span><br> and<span class="text-purple-500"> Design</span>.</h1>
    </div>
  </div>

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
