<script lang="ts">
import { defineComponent } from 'vue';
import { toNumber } from '@vue/shared'
import { useRouter,RouterLink } from 'vue-router'
const links = {
            0:'/',
            1:'https://www.github.com/jromerooo2',
            2:'https://www.twitter.com/jromerooo2',
            3:'https://raw.githubusercontent.com/jromerooo2/my-portfolio/dev/src/assets/resume.pdf',
            4:"/notes"
}

export default defineComponent({
    name: 'Header',
    data(){
        return {
            links,
            showMenu: false,
            scrolled: false,
          }
    },
    methods: {
    redirect(num: number) {
            window.open(this.links[num as keyof typeof toNumber], '_blank')?.focus()
    },
    toggleNav: function () {
        this.showMenu = !this.showMenu;
      },
      handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
})
</script>
<template >
  <div class="sticky top-0 ">
    <div class="">
      <nav
      :class="{'bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40': scrolled, 'bg-transparent': !scrolled}"
        class="
          container
          px-6
          py-8
          mx-auto
          rounded-xl
          md:flex md:justify-center md:items-center
        "
      >
        <div class="flex items-center justify-center">
          <!-- <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >
            Juan Romero
          </router-link> -->
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:justify-center
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-200">
            <RouterLink to="/" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <p>
                    Home
                </p>
            </RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-200">
            <RouterLink to="/aboutme" class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
                <p>
                    About Me
                </p>
            </RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-200">
            <RouterLink to="/exp" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                <line x1="8" y1="8" x2="12" y2="8" />
                <line x1="8" y1="12" x2="12" y2="12" />
                <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
                <p>
                    Experience
                </p>
            </RouterLink>
          </li>
          <li class="text-sm text-gray-800 font-bold hover:text-blue-200">
            <a class="flex items-center space-x-2" target="_blank" href="/public/resume.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
                <p>
                    Resume
                </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap');
    p{
        font-family: 'Poppins', sans-serif;
    }
    h1{
        font-family: 'Poppins', sans-serif;
    }
</style>