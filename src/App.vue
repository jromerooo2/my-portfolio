<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import HelloWorld from './components/HelloWorld.vue'
    import Header from './components/Header.vue'
    import WIVD from './components/WIVD.vue'
    import Contact from './components/Contact.vue'
    import Exp from './components/Exp.vue'
</script>

<template>
<div class="container-app space-y-28">
            <section class="one">
                    <Header />
                    <div class="bg-blue-100 flex flex-col items-center mx-auto 2xl:mt-10">  
                        <HelloWorld msg="Sup , I'm Juan Romero👋." />
                    </div>
            </section>
            <div class="two">
                <WIVD  />
            </div>
            <section>
                <Exp />
            </section>
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

h1{
  font-family: "Poppins", sans-serif;
}
body{
    height:100%;
    width: 100%;
    margin: 0px;
}

</style>
