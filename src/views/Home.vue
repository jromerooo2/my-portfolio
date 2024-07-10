<template>
  <div class="flex flex-col items-center justify-center">
    <div class="container-app md:px-96 px-6">
                <section class="one flex flex-col space-y-9">
                        <Header />
                        <div class="flex flex-col items-start mx-auto 2xl:mt-10">  
                            <HelloWorld msg="Juan Romero" />
                        </div>
                </section>
      </div>
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