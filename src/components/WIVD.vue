<script lang="ts">
import Work from '../components/Work.vue'
import { defineComponent, ref } from 'vue'
import work from '../types/work'

export default defineComponent({
    name: 'WIVD',
    components: {
        Work
    },
    setup() {
        const works = ref<work[]>([
            {
                title: 'Vue.js', description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the community and designed to be incrementally adoptable. For more information, see the official documentation.', image:'https://avatars.githubusercontent.com/u/6128107?s=280&v=4',id:"1",
            },
                        {
                title: 'Vue.js', description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the community and designed to be incrementally adoptable. For more information, see the official documentation.',image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png', id:"2",
            },
                        {
                title: 'Vue.js', description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the community and designed to be incrementally adoptable. For more information, see the official documentation.', image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png', id:"3",
            },
                        {
                title: 'Vue.js', description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the community and designed to be incrementally adoptable. For more information, see the official documentation.', image:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/master/src/assets/meditate.png', id:"4",
            },
        ])

        return { works }
    }

})
</script>

<template class="body ">
    <div class="flex">
            <div class="sticky flex flex-col items-center justify-center w-full min-h-screen">
            <img class="collant mx-auto my-2 img" alt="Vue logo" src="../assets/dev.png" />
            <h1 class="text-4xl font-bold abt text-center p-5 text-blue-900">What I've Been Working on.</h1>
            </div>
            <div class="">
                    <Work :works="works" />
            </div>
        </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
.img{
    height: 300px;
}
h1{
    font-family: 'Poppins', sans-serif;
}
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 50px;
  height: 20px;
  width: 50%;
}
p{
    width: 50%;
    padding: 50px;
}

</style>