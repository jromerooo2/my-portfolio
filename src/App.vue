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
            <div class="flex flex-col items-center mx-auto mt-16 ">  
                <HelloWorld msg="Hello , I'm Juan Romero👋. &#160;&#160;&#160;" />  
            </div>
      </div>
      <div class="h-screen">
          <WIVD  />
      </div>
</template>

<style>
.collant{
  width: 350px;
}
html{
    height:100%;
    width:100%;
    margin: 0px;
}

body{
    height:100%;
    width: 100%;
    margin: 0px;
}

</style>
