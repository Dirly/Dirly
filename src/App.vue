<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { Typed } from "@duskmoon/vue3-typed-js"
  import * as particleConfig from '@/data/ParticleConfig.js'
  import { loadFull } from "tsparticles"

  const particlesInit = async engine => {
    //await loadFull(engine);
    await loadFull(engine);
  };

  const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};


</script>

<template>
  <header>
    <img alt="hitregLogo" class="logo" src="@/assets/logo.svg"/>
    <Typed id="typed" class="pcOnly" :options="options">
      <h1><span class="typing"></span></h1>
    </Typed>
    <div class="wrapper">
      <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </nav>
    </div>
    <!-- <particles
        id="tsparticles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </particles>  -->
  </header>
  <div class="display">
      <RouterView v-slot="{ Component }">
        <Transition name="index">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
  </div>
  <footer>
    <p><a href="derek.kaleida@gmail.com"><fa :icon="['fas','envelope']" /></a></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      options: {
        strings: [
          "I make anything",
          "I make anything",
          "I make anything",
          "I make indie games",
          "I make experineces",
          "I make adventures",
          "I make bugs",
          "I make VR",
          "I make memes",
          "I make e-learning",
          "I make websites",
          "I make pixel art",
          "I make 3d art",
          "I make recursion",
          "I make solutions",
          "I do creative"
        ],
        loop: true,
        typeSpeed: 30,
        delay: 10,
        backDelay: 2000,
      }
    }
  },
  methods: {
  },
};
</script>

<style>
#tsparticles{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}
.index-enter-active,
.index-leave-active {
  transition: all 2s ease-out;
  overflow-x: hidden;
  position:fixed
}

.index-enter-to {
  z-index: 1;
  overflow-x: hidden;
}

.index-enter-from {
  z-index: 0;
  overflow-x: hidden;
}

.index-leave-to {
  z-index: -1;
  overflow-x: hidden;
  
}

.index-leave-from {
  z-index: 0;
  overflow-x: hidden;

}



header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  padding-left: calc(var(--section-gap) / 2);
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.display{
  flex-grow: 1;
  flex-basis: auto;
  align-self: stretch;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -2rem;
  margin-left: -2rem;
  margin-bottom: -2rem;
}

.display > *{
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  padding: 2rem;
  position:absolute;
}

footer{
  position:fixed;
  bottom: 0;
  height:50px;
  width:50px;
  margin: 0px;
  margin-left: -2rem;
  border-top-right-radius: 5px;
  font-size:30px;
  text-align: center;
  color:black;
  background-color: white;
  z-index: 999;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
  max-width: 370px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1026px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    max-width: 30vw;
    width:100%
    
  }

  .display{
    margin-left: 0;
    margin-bottom: 0px;
  }

  .display > *{
    top: 0px;
  }

  #typed{
    text-align: center;
    width: 100%;
    display:inline;
    margin-top: 10px;
  }

  .logo {
    margin: 0 0rem 0 0;
  }

  header .wrapper {
     width: 100%;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 10rem;
  }
}

</style>
