<script setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import 'vue-lite-youtube-embed/style.css'
</script>

<template>
  <div class="pressKit OpacityUp">
    <img :src="titleImage" class="header"/>
    <div class="innerContainer">
      <div>
        <h2><fa :icon="['fas','gamepad']"/> Description</h2>
        <div v-html="description"></div>
        <div class="line"></div>
        <h2><fa :icon="['fas','list']"/>  Features</h2>
        <div v-html="features"></div>
        <div class="line"></div>
        <h2><fa :icon="['fas','user']"/>  About the Developer</h2>
        <div v-html="developer"></div>
      </div>
      <div class="hideOnLarge line"></div>
      <div class="factsheet">
        <h2><fa :icon="['fas','file-circle-question']"/> Factsheet</h2>
        <div>
          <p><strong>Genre:</strong></p>
          <p>{{genre}}</p>
        </div>
        <div>
          <p><strong>Release Date:</strong></p>
          <p>{{releaseDate}}</p>
        </div>
        <div>
          <p><strong>Price:</strong></p>
          <p>{{price}}</p>
        </div>
        <div>
          <p><strong>Platforms:</strong></p>
          <p>{{platforms}}</p>
        </div>
        <div>
          <p><strong>Website:</strong></p>
          <p><a href="http://www.hitregstudios.com">Hitreg Studios</a></p>
        </div>
        <div>
          <p><strong>Contact Info:</strong></p>
          <p>press@hitregstudios.com</p>
        </div>
        <div>
          <p><strong>Socials:</strong></p>
          <p>@DirlyDev</p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <h2><fa :icon="['fas','video']"/> Video</h2>
    <div class="gallery">
      <div class="videos" v-for="(video, index) in videos" :key="index">
        <LiteYouTubeEmbed 
          :id="video.id" 
          :title="video.title"
        />
      </div>
    </div>
    <div class="line"></div>
    <h2><fa :icon="['fas','image']"/>  Screen Shots</h2>
    <silent-box class="gallery" :gallery="images"></silent-box>
    <div class="line"></div>
    <h2><fa :icon="['fas','registered']"/>  Branding</h2>
    <silent-box class="gallery" :gallery="branding"></silent-box>
    <div class="line"></div>
    <h2><fa :icon="['fas','pen-to-square']"/>  Selected Articles</h2>
    <div class="articles" v-for="(article, index) in articles" :key="index">
      <div class="article">
        <h3 class="articleTitle">{{article.description}}</h3>
        <p class="articleTitle"><span>{{article.author}}</span>  |  <a :href="article.src">{{article.link}}</a></p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      titleImage: String,
      price: String,
      platforms: String,
      genre: String,
      releaseDate: String,
      description: String,
      history: String,
      features: String,
      developer: String,
      videos: Array,
      images: Array,
      branding: Array,
      articles: Array
    },
     mounted(){
      document.body.style.background = "#010101";
    },
    methods: {
      backBtn(){
        this.$route.name;
      }
    }
  }
</script>
<style scoped>

.innerContainer{
  margin-top: 20px;
}
.factsheet{
  margin-right:20px;
  padding-right: 20px;
}

.factsheet >div{
  margin-bottom:10px;
}
.pressKit{
  background-color:#141313;
  height:auto;
}
strong{
  font-weight: 500;
}

h2{
  margin-bottom: 7px;
}

.line{
  margin-top: 40px;
}

.article{
  padding:20px;
  border:solid rgba(255, 255, 255, 0.083) 1px;
  margin:10px;
}

.gallery{
  margin-top:0;
}

.header{
  width:100%;
}

.videos{
  max-width: 367px;
}

.screenshots{
  width:200px;
}
@media (min-width: 1024px) {
  .pressKit {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .factsheet{
    min-width: 200px;
    border-right: 1px rgba(255, 255, 255, 0.084) solid;
  }

  .innerContainer{
    display:flex;
    flex-direction: row-reverse;
  }

}
</style>
