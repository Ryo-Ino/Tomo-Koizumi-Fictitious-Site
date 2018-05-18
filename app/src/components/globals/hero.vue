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
      container:''
    }
  },
  mounted: function(){
    this.container = document.getElementById('container');
    let page = sessionStorage.getItem('heroPage') || 0;
    let lastPage = this.$refs.hrImgs.length-1;
   
    for (let i = 0; i < this.$refs.hrImgs.length; i++) {
      this.$refs.hrImgs[i].style.opacity = '0';
    }
    this.$refs.hrImgs[page].style.opacity = '1';

    setInterval(() => {
      if (page == lastPage) {
        this.$refs.hrImgs[page].style.opacity = '0';
        sessionStorage.removeItem('heroPage');
        page = 0;
        sessionStorage.setItem('heroPage', page);
        this.$refs.hrImgs[page].style.opacity = '1';
      }else {
        page++;
        sessionStorage.setItem('heroPage', page);
        this.$refs.hrImgs[page].style.opacity = '1';
        let prevImg = this.$refs.hrImgs[page].previousElementSibling;
        prevImg.style.opacity = '0';
      }  
    }, 3000);
    
    
    

    //sessionStorageリセット
    sessionStorage.removeItem('heroPage');  
  },
  methods: {
    heroFade: function(){
      this.open;
    },
    wheel: function(){
      this.open;
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
      if (this.touchStartY > this.touchMoveY) {
        this.open;
      }
    }
  },
  computed: {
    open: function() {
      this.container.style.overflow = 'visible';
      this.container.style.opacity = '1';
      this.$store.state.flagOpen = true;
      this.isFade = this.$store.state.flagOpen;
    }
  }
}
</script>