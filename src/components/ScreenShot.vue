
<template>
  <iframe class="steamFrame" :src="steamPath" frameborder="0" width="100%" height="190"></iframe>
</template>
<script>
  export default {
    props: {
      steamPath: String,
    },
    mounted(){
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
      this.onResize();
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    methods: {
      onResize() {
        console.log(window.innerWidth);
        //window.innerWidth > 1280
        var frameObj = document.getelement(frameID);
        var frameContent = frameObj.contentWindow.document.body.innerHTML;
        alert("frame content : " + frameContent);
      }
    }
  }
</script>

<style scoped>
.steamFrame{
  flex:none;
  margin-bottom:40px;
}
</style>
