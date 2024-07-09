<template>
    <div class="container-app flex items-center justify-center px-16">
                <section class="one">
                        <Header />
                        <div class="flex flex-col items-start mx-auto 2xl:mt-10">  
                            <HelloWorld msg="Juan Romero" />
                        </div>
                </section>
                <!-- <div class="two">
                    <WIVD  />
                </div> -->
                <!-- <section>
                    <Exp />
                </section> -->
            </div>
            <section class="three">
                <Contact />
            </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import WIVD from '../components/WIVD.vue'
import Contact from '../components/Contact.vue'
import Exp from '../components/Exp.vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    Exp,
    Contact,
    WIVD,
    Header,
    HelloWorld
  }
}
</script>