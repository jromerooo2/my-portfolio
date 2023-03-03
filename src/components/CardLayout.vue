<template>
    <div class="flex justify-center items-center">      
      <div class="block space-y-8 md:space-y-0 md:grid grid-cols-2 gap-7 mx-5 items-center">
          <div v-for="note in notes">
              <Card 
                  :title="note.title"
                  :description="note.description"
                  :image="note.image"
                  :date="note.date"
                  :link="note.link" />
          </div>
      </div>
    </div>
</template>
<script lang="ts">
import Card from './Card.vue';
export default {
  name: 'CardLayout',
  data(){
    return{
      notes:[
        {
            title:"Build a Neural Network from Scratch",
            description:"In this article we go through the process of building a Neural Network from scratch, without using python libraries. This project is targeted to beginners in Neural Networks.",
            image:"https://img.freepik.com/premium-vector/neural-network-model-with-real-synapses-circle-neurons-connected-full-mesh-illustration_250841-32.jpg",
            date:"2021-09-01",
            link:"https://www.notion.so/docsjromero/neural-network-from-scratch-experimental-dac601704cae4b22889a0b4801c0eb5d?pvs=4"
        },
        {
            title:"Research Material: Artificial Intelligence and all the Science behind it",
            description:"In this space I've compiled all the information that I used to write my research paper @ MIT during Summer 2023.",
            image:"https://plat.ai/wp-content/uploads/aibuild.jpg",
            date:"2021-09-01",
            link:"https://docsjromero.notion.site/docsjromero/Research-c42e0c7e1e9b471192798420024f5aad"
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>