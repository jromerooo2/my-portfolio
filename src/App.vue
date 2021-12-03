<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import WIVD from './components/WIVD.vue'

</script>

<template>
      <div class="h-screen">
            <Header />
            <div class="flex flex-col items-center mx-auto 2xl:mt-10">  
                <HelloWorld msg="Hello , I'm Juan Romero👋. &#160;&#160;&#160;" />
            </div>
      </div>
      <div class="">
          <WIVD  />
      </div>
        <div class="h-screen flex flex-col items-center mx-auto 2xl:mt-10">  
                            <Header />
                <HelloWorld msg="Hello , I'm Juan Romero👋. &#160;&#160;&#160;" />  
        </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');

html{
    height:100%;
    width:100%;
    margin: 0px;
}
h1{
  font-family: "Poppins", sans-serif;
}
body{
    height:100%;
    width: 100%;
    margin: 0px;
}

</style>
