<template>
    <div class="px-16">
        <Header />
        <Exp />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Exp from '../components/Exp.vue';
export default defineComponent({
    name: 'Experience',
    components: {
        Exp,
        Header
    }
})
</script>