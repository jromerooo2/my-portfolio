<template>
    <div class="container-app space-y-28">
                <section class="one">
                        <Header />
                        <div class="bg-blue-100 flex flex-col items-center mx-auto 2xl:mt-10">  
                            <HelloWorld msg="Hey , I'm Juan Romero👋." />
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