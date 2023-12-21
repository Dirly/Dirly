
<template>
  <iframe ref="steamWidget" class="steamFrame" :src="steamPath" frameborder="0" width="100%" height="190"></iframe>
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
        console.log();
        if(window.innerWidth < 1024){
           var tail = this.$refs.steamWidget.contentWindow.document
           console.log(tail.getElementsByClassName("tail"));
          //tail[0].style.display = "none";
        }
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
