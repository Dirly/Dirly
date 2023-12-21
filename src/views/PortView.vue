<script setup>
</script>

<template>
  <div id="portfolio" class="OpacityUp">
    <router-link to="portfolio/againstGreatDarkness" id="agd" class="innerContainer animate__animated animate__slideInLeft delay-1">
      <div class="border"></div>
      <img alt="AgainstGreatDarknessLogo" class="logo animate__animated animate__bounceInLeft delay-2" src="@/assets/AGD/AGD_Logo.png"/>
    </router-link>
    <router-link to="portfolio/SectorCritical" id="sc" class="innerContainer animate__animated animate__slideInLeft delay-2">
      <div class="border"></div>
      <img alt="SectorCriticalLogo" class="logo animate__animated animate__bounceInLeft delay-3" src="@/assets/SC/logo.png"/>
    </router-link>
    <router-link to="portfolio/iPrep" id="iprep" class="innerContainer animate__animated animate__slideInLeft delay-3">
      <div class="border"></div>
      <img alt="iPrepLogo" class="logo animate__animated animate__bounceInLeft delay-4" src="@/assets/iPrep/logo.png"/>
    </router-link>
    <router-link to="portfolio/AmazingApp" id="aa" class="innerContainer animate__animated animate__slideInLeft delay-4">
      <div class="border"></div>
      <img alt="AmazingAppLogo" class="logo animate__animated animate__bounceInLeft delay-5" src="@/assets/AA/AA_Logo.png"/>
    </router-link>
    <router-link to="portfolio/againstGreatDarkness" id="FC" class="innerContainer animate__animated animate__slideInLeft delay-5">
      <div class="border"></div>
      <img alt="FC" class="logo animate__animated animate__bounceInLeft delay-6" src="@/assets/FC/FC_Logo.png"/>
    </router-link>
    <div class="fadeBlack"></div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      selectedItem: null,
    }
  },
  mounted(){
    document.body.style.background = "#070708";
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  methods: {
  }
}
</script>
  
<style scoped>
p{
  margin-bottom: 5px;
}

.logo{
  max-width:70%;
  max-height:70%;
  transition: max-height 0.5s ease-out;
  transition: max-width 0.5s ease-out;

}
.fadeBlack{
  height: fit-content;
  background-color:black;
}

h1 span{
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
}

#portfolio{
  padding: 0px !important;
  height: auto !important
}

.innerRow > *{
  padding:0, 10px;
  text-align: center;
}

.onParentHover {
  animation: pulse; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}

.innerContainer{
  display:flex;
  width:100%;
  align-items: center;
  background-repeat: no-repeat;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
  cursor:pointer;
  background-size: 100%;
  transition: background-size 0.5s ease-out;
  height:200px;
  transition: background-position 0.1s ease-out;
  overflow: hidden;
}

#agd .logo{
  max-width:90%;
  max-height:90%;
}

#agd{
  background-image: url("AGD/AGD_KeyArt.png");
  background-position: 50% 31%;
  background-color:#f25bbf;
}

#agd .border{
  background-color: rgba(253, 19, 187, 0.148)
}

#sc{
  background-color: #116399;
  background-image: url("SC/Background.png");
  background-position: bottom;
}

#sc .border{
  background-color: #0099ff29;
}

#iprep{
  background-image: url("iPrep/Background.png");
  background-position: 50% 31%;
}

#iprep .border{
  background-color: rgba(24, 124, 146, 0.161)
}

#aa{
  background-image: url("AA/Background.png");
  background-position: 50% 86%;
  background-color:#f8931f;
}

#aa .border{
  background-color: rgba(248, 153, 29, 0.157);
}

#FC{
  background-color: #020609;
  background-image: url("FC/Background.png");
  background-position: 50% 26%;
}

#FC .border{
  background-color: #02060928
}

.border{
  width:inherit;
  height:inherit;
  display:inline-block;
  transition: border-color 0.5s ease-out;
  transition: background-color 0.5s ease-out;
  border: solid 2px rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width:100%;
  pointer-events: none
}

.innerContainer.selected .border{
    visibility:hidden;
}

@media (hover: hover) {
  .innerContainer:hover {
    transition: background-size 0.5s ease-out;
    background-size: 102% !important;
  }
  .innerContainer:hover .border{
    border: solid 4px rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.494) !important;
    mix-blend-mode: overlay;
  } 

  .innerContainer:hover .logo{
    max-width: 110% !important;
    max-height: 110% !important;
  }
}

@media (min-width: 1026px) {
  .innerContainer{
    background-size: 100%;
    height:300px;
    overflow: hidden;
  }
  .logo{
    max-width:100%;
    max-height:100%;
  }

  #agd .logo{
    max-height:120% !important;
    max-width:120% !important;
    margin-top:-30px;
  }
}
</style>
