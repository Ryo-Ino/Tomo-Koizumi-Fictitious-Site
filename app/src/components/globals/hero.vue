<template lang="html"><div>

  <div class="p-hero" :class="{'is-fade': isFade}"
  @wheel="wheel" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <div class="p-hero__image" :style="{'background-image':'url(' + image.src + ')'}" ref="hrImgs" v-for="image in images"></div>
    <button class="p-hero__more c-btn-square c-skin-03" @click="heroFade">View More</button>
    <div class="p-hero-direction">
      <span class="p-hero-direction__arrow"></span>
    </div>
  </div>

</div></template>

<script type="text/javascript">
export default {
  props:[ 'scroll' ],
  data: function (){
    return{
      images:[
        { src: 'images/hero/IMG_0056.jpg' },
        { src: 'images/hero/IMG_0132.jpg' },
        { src: 'images/hero/IMG_0412.jpg' },
        { src: 'images/hero/IMG_0559.jpg' },
        { src: 'images/hero/IMG_0727.jpg' },
        { src: 'images/hero/IMG_1105.jpg' },
        { src: 'images/hero/IMG_0671.jpg' },
        { src: 'images/hero/IMG_0861.jpg' },
        { src: 'images/hero/IMG_1263.jpg' }
      ],
      isFade: false,
      touchStartY: 0,
      touchMoveY: 0,
      body: '',
      container: '',
      openClass: '',
    }
  },
  mounted: function(){
    this.body = document.getElementsByTagName('body');
    this.container = document.getElementById('container');
    this.openClass = document.getElementsByClassName('is-open');
    let page = 0;
    let lastPage = this.$refs.hrImgs.length-1;
   
    for (let i = 0; i < this.$refs.hrImgs.length; i++) {
      this.$refs.hrImgs[i].style.opacity = '0';
    }
    this.$refs.hrImgs[page].style.opacity = '1';

    setInterval(() => {
      if (page == lastPage) {
        this.$refs.hrImgs[page].style.opacity = '0';
        page = 0;
        this.$refs.hrImgs[page].style.opacity = '1';
      }else {
        page++;
        this.$refs.hrImgs[page].style.opacity = '1';
        let prevImg = this.$refs.hrImgs[page].previousElementSibling;
        prevImg.style.opacity = '0';
      }  
    }, 3000);
    
  },
  methods: {
    heroFade: function(){
      this.open;
    },
    wheel: function(e){
      e.preventDefault();
      let  deltaY = e.deltaY ? -(e.deltaY) : e.wheelDelta ? e.wheelDelta : -(e.detail);

      if (deltaY < 0) {
        this.open;  
      }
    },
    touchstart: function(e){
      e.preventDefault();
       this.touchStartY = e.touches[0].pageY;
    },
    touchmove: function(e){
      e.preventDefault();
      this.touchMoveY = e.changedTouches[0].pageY;
    },
    touchend: function(e){
      e.preventDefault();
      let touchResult = this.touchMoveY - this.touchStartY;
      let rebe = 50;

      if (touchResult < -rebe) {
        this.open;
      }
    }
  },
  computed: {
    open: function() {
      this.container.style.opacity = '1';
      this.$store.state.flagOpen = true;
      this.isFade = this.$store.state.flagOpen; 
      setTimeout(() => {
        this.body[0].style.overflow = 'visible';
        window.scrollTo(0, 0);
      }, 500);
      setTimeout(() => {
        for (let i = 0; i < this.openClass.length; i++) {
          this.openClass[i].style.transitionDelay = '0s';
        }
      }, 1200);
    }
  }
}
</script>