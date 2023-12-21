<script setup>
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import * as lineConfig from '../data/LineConfig.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
</script>

<template>
  <div class="about OpacityUp">
    <div class="wipe animate__animated animate__slideInDown"></div>
    <div id="WhoIAm" class="innerContainer ">
      <h1 class="animate__animated animate__bounceIn">WHO I AM</h1>
      <div class="line animate__animated animate__fadeIn delay-1"></div>
      <p class="animate__animated animate__fadeIn delay-2">I am a professional problem solver with over 15 years of experience in creative thinking and execution. My passion is learning, which has driven me to become an ambidextrous developer. I walk and talk both design and code allowing me to provide my clients creative solutions that are seamlessly implemented. I am currently seeking a fulltime digital role.</p>
      <h2 class="speachBubble animate__animated animate__fadeInDown delay-1">Jack of all trades <br class="mobile" /> master of Some</h2>
    </div>
    <div id="MySkills" class="innerContainer">
      <div class="innerRow">
        <div class="skillTarget animate__animated animate__fadeInDown delay-2">
          <div id="webdev"  class="diamond">
            <fa :icon="['fas', 'wifi']" size="2xl" />
          </div>
          <h3>Web Developer</h3>
          <p class="pcOnly">JS, HTML, CSS, Node, Git, Vue, React, Angular</p>
        </div>
        <div class="skillTarget animate__animated animate__fadeInDown delay-3">
          <div id="designer" class="diamond">
            <fa :icon="['fas', 'paintbrush']" size="2xl" />
          </div>
          <h3>Designer</h3>
          <p class="pcOnly">Creative Thinking, Photoshop, Illustrator, Indesign</p>
        </div>
        <div class="skillTarget animate__animated animate__fadeInDown delay-4">
          <div id="gamedev" class="diamond">
            <fa :icon="['fas', 'gamepad']" size="2xl" />
          </div>
          <h3>Game Developer</h3>
          <p class="pcOnly">C#, Unity, Aseprite, Blockbench, Blender</p>
        </div>
        <div class="skillTarget animate__animated animate__fadeInDown delay-5">
          <div id="motionArtist" class="diamond">
            <fa :icon="['fas', 'film']" size="2xl" />
          </div>
          <h3>Motion Artist</h3>
          <p class="pcOnly">After Effects, Premier, iMovie, Audition, Flash</p>
        </div>
      </div>
      <Line id="SkillChart" :styles="line.styles" class="animate__animated animate__fadeIn delay-5" :data="line.data" :options="line.options" />
      <div class="positions pcOnly animate__animated animate__fadeIn delay-5" id="BarChart">
        <div class="animate__animated animate__fadeIn delay-5" id="GD">GRAPHIC DESIGNER</div>
        <div class="animate__animated animate__fadeInLeft delay-6" id="MD">MULTIMEDIA DEVELOPER</div>
        <div class="animate__animated animate__fadeInLeft delay-7" id="P">PROGRAMMER</div>
        <div class="animate__animated animate__fadeInLeft delay-8" id="SP">SENIOR PROGRAMER</div>
        <div class="animate__animated animate__fadeInLeft delay-9" id="TD">TECHNICAL DIRECTOR</div>
      </div>
      <div class="positions mobile animate__animated animate__fadeIn delay-5" id="BarChart">
        <div class="animate__animated animate__fadeIn delay-5" id="VOX">VOX MEDICA</div>
        <div class="animate__animated animate__fadeInLeft delay-6" id="FL">FREELANCE</div>
        <div class="animate__animated animate__fadeInLeft delay-7" id="RN">RED NUCLEUS</div>
      </div>
    </div>
    <div class="innerContainer">
      
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Line
  },
  data() {
    return {
      line: lineConfig
    }
  },
  mounted(){
    document.body.style.background = "#0d1927";
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>
  
<style scoped>



p{
  margin-bottom: 5px;
}
.positions > *{
  position: relative;
  float:left;
  font-size: 9px;
  padding-left:5px;
  color:#ffffff;
  font-weight:500;
}
#VOX{
  width: 20%;
  background-color: #005e84;
  margin-left: 0.7%;
}
#FL{
  width: 13%;
  background-color: #3b3f40;
}
#RN{
  width: 64%;
  background-color: #d40000;
}


#GD{
  width: 26.4%;
  background-color: #7aadf6;
  margin-left: 0.7%;
}

#MD{
  width:19.3%;
  background-color: #e100ff;
}

#P{
  width:19.2%;
  background-color: #0ad00a;
}

#SP{
  width:19.2%;
  background-color: #0a980a;
}
#TD{
  width:12.7%;
  background-color: #ffa200;
}

.wipe{
  width: 120%;
  height:100%;
  background-color: #0d0d19;
  position:absolute; 
  top:0px;
  z-index: -1;
  margin-left:-35px;
}

h1 span{
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
}

.diamond{
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  background-color: red;
  display: inline-block;
  margin-bottom: 20px;
}

.diamond > *{
  transform: rotate(-45deg);
  color: white;
  margin-right: 1px;
  margin-top: 10px;
}
.speachBubble {
  background: rgb(255, 255, 255);
  position: relative;
  margin-top:20px;
  color: rgb(30, 30, 30);
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  padding:20px;
  width:100%;
  z-index: 2;
}

#SkillChart{
  height:300px;
}
.speachBubble:before {
  content: "";
  position: absolute;
  top: 98%;
  left: calc(50% - 10px);
  width: 0;
  border-top: 20px solid rgb(255, 255, 255);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.innerContainer:hover:before{
  border: solid 4px rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.494) !important;
  mix-blend-mode: overlay;
} 

.innerRow{
  margin-top:30px;
}

.innerRow > *{
  padding:0, 10px;
  text-align: center;
  margin-bottom:30px;
}

.innerContainer{
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
}
.about{
  background-position: 0 100%;
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  color:#fff;
  padding-bottom:60px;
}

#BarChart{
  position:relative;
  margin-top:-10px;
  height:20px;
  width:100%;
  margin-left:12px;
}

.line{
  border-color: #ffffff2a;
  width:100%;
}

Line{
  height:100px;
}




@media (min-width: 1026px) {
  .innerRow{
    margin-top:0px;
  }

  .wipe{
    position:fixed; 
    margin-left:-35px;
  }

}
</style>
