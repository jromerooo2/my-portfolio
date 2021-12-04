<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import HelloWorld from './components/HelloWorld.vue'
    import Header from './components/Header.vue'
    import WIVD from './components/WIVD.vue'
    import Contact from './components/Contact.vue'
</script>

<template>
<div class="container-app">
            <section class="h-screen one">
                    <Header />
                    <div class="flex flex-col items-center mx-auto 2xl:mt-10">  
                        <HelloWorld msg="Hello , I'm Juan Romero👋. &#160;&#160;&#160;" />
                    </div>
            </section>
            <div class="two">
                <WIVD  />
            </div>
            <section class="three">
                <Contact />
            </section>
</div>                

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
html{
    height:100%;
    width:100%;
    margin: 0px;
}
section{
    scroll-snap-align: start;
}
.container-app{
    height:100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
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
