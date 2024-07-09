<template>
    <div class="px-16">
        <Header />
        <About />
        <Contact />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Header from '../components/Header.vue'
export default defineComponent({
    name: 'AboutMe',
    components: {
        About,
        Contact,
        Header,
    }
})
</script>