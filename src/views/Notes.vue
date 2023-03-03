<template>
    <Header />
    <div class="space-y-5 mt-6">
      <h1 class="text-center text-5xl font-bold text-green-600">My Research Notes/Papers .</h1>
      <p class="text-center text-gray-500">These are some of the research notes and papers that I've writtend throughout the years.  </p>
      <CardLayout />
    </div>
    <Contact />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue';
import Contact from '../components/Contact.vue';
import CardLayout from '../components/CardLayout.vue';
export default {
  name: 'Notes',
  components: {
    Header,
    Contact,
    CardLayout
  }
}

</script>