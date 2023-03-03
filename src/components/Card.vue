<template>
<a target="_blank" :href="link">
  <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt="Office"
      :src="image"
      class="h-64 w-full bg-contain"
    />
  
    <div class="bg-white p-4 sm:p-6">
      <p class="block text-xs text-gray-500">
        {{ date }}
      </p>
  
      <a href="#">
        <h3 class="mt-0.5 text-lg text-gray-900 font-bold">
          {{ title }}
        </h3>
      </a>
  
      <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {{ description }}
      </p>
    </div>
  </article>
</a>

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