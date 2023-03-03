<template>
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 sm:p-6">
    <p class="block text-xs text-gray-500">
      {{ date }}
    </p>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">
        {{ title }}
      </h3>
    </a>

    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        {{ description }}
    </p>
  </div>
</article>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default {
  name: 'Card',
  props:{
    title: String,
    description: String,
    image: String,
    date: String,
    link: String
  }
}
</script>