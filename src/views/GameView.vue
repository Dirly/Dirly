<script setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import SteamWidget from '../components/SteamWidget.vue'
  import 'vue-lite-youtube-embed/style.css'
</script>

<template>
  <div class="game  OpacityUp">
    <div class="wipe animate__animated animate__slideInUp" :style="{'background-color': wipeColor}">
      <div class="bg" :class="backgroundAnimation" :style="[backgroundStyle(background), {'bottom': backgroundPos}]"></div>
      <div class="fg" :class="forgroundAnimation" :style="backgroundStyle(forground)"></div>
    </div>
    <div class="innerContainer ">
      <div class="innerRow animate__animated  animate__fadeInUp delay-3">
        <div class="descriptionText" :style="{ 'color' : textColor, 'backgroundColor' : boxColor}">
          <img class="portLogo animate__animated animate__fadeInDown delay-4" :src="logo">
          <p class="description">{{description}}</p>
        </div>
      </div>
      <silent-box class="gallery animate__animated animate__fadeIn delay-5" :gallery="images">
        <template v-slot:silentbox-item="{ silentboxItem }">
          <div class="border"></div>
          <img :src="isYoutube(silentboxItem.src)"/>
        </template>
      </silent-box>
      <SteamWidget v-if="steamWidget != undefined" class="animate__animated animate__fadeInUp delay-3" :steamPath="steamPath" />
    </div>  
  </div>
</template>

<script>
  export default {
    props: {
      headerColor: String,
      logo: String,
      title: String,
      description: String,
      pressKit: String,
      wipeColor: String,
      backgroundPos: String,
      background: String,
      backgroundAnimation: String,
      forground: String,
      forgroundAnimation: String,
      steamWidget: String,
      textColor: String,
      boxColor: String,
      video: Object,
      images: Array,
    },
    mounted(){
      document.body.style.background = this.headerColor;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        const elements = document.querySelectorAll('.gallery.animate__animated.animate__fadeInUp.delay-2');
        elements.forEach(el => {
          el.classList.remove('animate__animated');
          el.classList.remove('animate__fadeInUp');
          el.classList.remove('delay-2');
          
        });
      }, 4000);
      setTimeout(() => {
        const gameElement = document.querySelector('.game');
        if (gameElement) {
          gameElement.scrollIntoView({ behavior: 'smooth'});
        }
      }, 500);
    },
    computed: {
      steamPath() {
        return "https://store.steampowered.com/widget/" + this.steamWidget + "/";
      },
      currentRouteName() {
        return this.$route.name;
      }
    },
    methods: {
      backgroundStyle(file) {
        return "background-image: url(" + file + ")";
      },
      botPos() {
        return "bottom:"+ this.backgroundPos;
      },
      getImgUrl(name){
        return new URL("./dir/"+ name, import.meta.url).href
      },
      backBtn(){
        this.$route.name;
      },
      isYoutube(src){
        if(src.indexOf("youtube") > -1){
          src = src.replace(/www./g, "img.")
          src = src.replace(/embed/g, "vi")
          src = src + "/hqdefault.jpg"
        }
        return src;
      }
    }
  }
</script>

<style scoped>

.wipe{
  width: 100%;
  height:100%;
  position:absolute; 
  left:0px;
  bottom:0px;
  z-index: -1;
  overflow:hidden;
}

.bg{
  width: 100%;
  height:100%;
  position:absolute; 
  z-index: 0;
  background-repeat: no-repeat;
  background-position: center;
}

.fg{
  width: 100%;
  height:100%;
  position:absolute; 
  bottom:0px;
  z-index: 0;
  background-repeat: no-repeat;
  background-position: bottom;
}


.portLogo{
  display: block;
  object-fit: contain;
  max-height: 230px;
  width:100%;
}

.sizerBG{
  animation: pingpong-background-size 40s infinite alternate;
}

.sizerFG{
  animation: pingpong-forground-size 40s infinite alternate;
}

.hover{
  background-size:contain;
  animation: pingpong-backposition 5s ease-in-out infinite alternate;
}

.rotate{
  background-size:contain;
  animation: infi-rotate 20s linear infinite; 
}

@keyframes infi-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pingpong-backposition {
  0%, 100% {
    bottom: 0px;
  }
  50% {
    bottom: 20px;
  }
}

@keyframes pingpong-background-size {
  0%, 100% {
    background-size: 300%;
  }
  50% {
    background-size: 310%;
  }
}

@keyframes pingpong-forground-size {
  0%, 100% {
    background-size: 200%;
  }
  50% {
    background-size: 220%;
  }
}

.btn{
  padding: 10px;
  width: 130px;
  background-color: white;
  border-radius: 30px;
  margin-top: 30px;
  display: block;
  text-align: center;
  color:black;
  font-weight:bold; 
}

.btn:hover{
  color:white;
  background-color:black;
}

.innerRow{
  align-items: stretch;
  align-content: stretch;
  width:100%;
}

.descriptionText{
  padding:0px 19px;
  text-align: center;
}

.description{
  text-align: left;
}

.innerRow > *{
  flex-grow: 1;
}
.subHeader{
  width:100%;
  height:16rem;
  background-size: contain;
  background-position: 0;
  background-repeat: no-repeat;
}

.steamFrame{
  flex:none;
  margin-bottom:40px;
}

.innerContainer{
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
}

.game{
  image-rendering: pixelated;
  background-size: cover;
  background-position: center;
  overflow-y: hidden;
  overflow-x: hidden;
}

.border{
  display:block;
  transition: border-color 0.5s ease-out;
  transition: background-color 0.5s ease-out;
  border: solid 2px rgba(255, 255, 255, 0);
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: fill;
  position:absolute;
  z-index: 1;
}



.silentbox-item:hover .border{
  border: solid 4px rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.494) !important;
  mix-blend-mode: overlay;
} 

@media (min-width: 1026px) {

  .innerContainer{
    padding:10px 5vw;
  }

  .portLogo{
    display: inline;
    object-fit: contain;
    max-height: 230px;
    width:auto;
    margin-bottom:20px;
  }

  @keyframes pingpong-background-size {
    0%, 100% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 104% 104%;
    }
  }

  @keyframes pingpong-forground-size {
    0%, 100% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 112% 112%;
    }
  }



}
</style>
