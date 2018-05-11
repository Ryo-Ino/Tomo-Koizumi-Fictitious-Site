<template lang="html"><div>

  <div class="p-hero" :class="{'is-fade': isFade}"
  @wheel="wheel" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <div class="p-hero__image" :style="{'background-image':'url(' + image.src + ')'}" v-for="image in images"></div>
    <button class="p-hero__more c-btn-square c-skin-03" @click="heroFade">View More</button>
    <div class="p-hero-direction">
      <span class="p-hero-direction__arrow"></span>
    </div>
  </div>

</div></template>

<script type="text/javascript">
let sideImg;
let page = sessionStorage.getItem('heroPage') || 0;
let lastPage = 0;
let touchStartY = 0;
let touchMoveY = 0;
let container;
let canvas;
function open(){
  container.style.overflow = 'visible';
  container.style.opacity = '1';
  canvas.style.opacity = '1';
}
export default {
  props:[ 'scroll' ],
  data: function (){
    return{
      images:[
        { id: 'image-0', class:'side-image', src: 'images/hero/IMG_0056.jpg'},
        { id: 'image-1', class:'side-image', src: 'images/hero/IMG_0132.jpg'},
        { id: 'image-2', class:'side-image', src: 'images/hero/IMG_0412.jpg'},
        { id: 'image-3', class:'side-image', src: 'images/hero/IMG_0559.jpg'},
        { id: 'image-4', class:'side-image', src: 'images/hero/IMG_0727.jpg'},
        { id: 'image-5', class:'side-image', src: 'images/hero/IMG_1105.jpg'},
        { id: 'image-6', class:'side-image', src: 'images/hero/IMG_0671.jpg'},
        { id: 'image-7', class:'side-image', src: 'images/hero/IMG_0861.jpg'},
        { id: 'image-8', class:'side-image', src: 'images/hero/IMG_1263.jpg'}
      ],
      isFade: false,
    }
  },
  methods: {
    heroFade: function(){
      this.isFade = true;
      this.$store.state.flagOpen = true;
      open();
    },
    wheel: function(){
      this.isFade = true;
      this.$store.state.flagOpen = true;
      open();
    },
    touchstart: function(e){
      e.preventDefault();
       touchStartY = e.touches[0].pageY;
    },
    touchmove: function(e){
      e.preventDefault();
      touchMoveY = e.changedTouches[0].pageY;
    },
    touchend: function(e){
      e.preventDefault();
      if (touchStartY > touchMoveY) {
        this.isFade = true;
        this.$store.state.flagOpen = true;
        open();
      }
    }
  },
  mounted: function(){
   container = document.getElementById('container'); 
   canvas = document.getElementById('canvas');
   let sideImg = document.getElementsByClassName('p-hero__image');
   let image = document.getElementsByClassName('p-project-article__image');
   let title = document.getElementsByClassName('p-project-article__title');
   let lastPage = parseInt(sideImg[sideImg.lenght-1]); 
   
    for (var i = 0; i < sideImg.length; i++) {
      sideImg[i].style.opacity = '0';
    }
    sideImg[page].style.opacity = '1';
    setInterval(function(){
      if (page == 8) {
        sideImg[page].style.opacity = '0';
        sessionStorage.removeItem('heroPage');
        page = 0;
        sessionStorage.setItem('heroPage', page);
        sideImg[page].style.opacity = '1';
      }else {
        page++;
        sessionStorage.setItem('heroPage', page);
        sideImg[page].style.opacity = '1';
        let prevImg = sideImg[page].previousElementSibling;
        prevImg.style.opacity = '0';
      }
    }, 3000);

    //sessionStorageリセット
    sessionStorage.removeItem('heroPage');  
  }
}
</script>