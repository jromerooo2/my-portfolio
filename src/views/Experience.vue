<template>
    <div class="md:px-56 px-2 space-y-7">
        <Header />
        <WIVD />
        <Exp />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import WIVD from '../components/WIVD.vue';
import Exp from '../components/Exp.vue';
export default defineComponent({
    name: 'Experience',
    components: {
        Exp,
        Header,
        WIVD
    }
})
</script>