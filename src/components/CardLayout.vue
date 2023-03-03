<template>
    <Header />
    <div class="justify-center items-center h-screen">      
      <div class="block space-y-8 md:space-y-0 md:grid grid-cols-3 gap-7 mx-5">
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
import { defineComponent } from 'vue'
import Card from './Card.vue';
import Header from './Header.vue';
export default {
  name: 'CardLayout',
  data(){
    return{
      notes:[
        {
            title:"Build a Neural Network from Scratch",
            description:"In this article, we will build a neural network from scratch using only numpy. We will build a neural network that can classify handwritten digits with an accuracy of 97%.",
            image:"https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            date:"2021-09-01",
            link:"https://docsjromero.notion.site/neural-network-from-scratch-experimental-dac601704cae4b22889a0b4801c0eb5d"
        },
        {
            title:"Build a Neural Network from Scratch",
            description:"In this article, we will build a neural network from scratch using only numpy. We will build a neural network that can classify handwritten digits with an accuracy of 97%.",
            image:"https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            date:"2021-09-01",
            link:"https://docsjromero.notion.site/neural-network-from-scratch-experimental-dac601704cae4b22889a0b4801c0eb5d"
        },
        {
            title:"Build a Neural Network from Scratch",
            description:"In this article, we will build a neural network from scratch using only numpy. We will build a neural network that can classify handwritten digits with an accuracy of 97%.",
            image:"https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            date:"2021-09-01",
            link:"https://docsjromero.notion.site/neural-network-from-scratch-experimental-dac601704cae4b22889a0b4801c0eb5d"
        }
      ]
    }
  },
  components: {
    Header,
    Card
  }
}
</script>