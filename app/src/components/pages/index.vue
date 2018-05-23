<template><div>

<div id="app" class="p-project" @mousemove="mousepursuit">

<button class="p-project-drag c-btn-circle c-skin-01" data-page="text" ref="dragBtn" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
  Drag Me
</button>

<div class="p-project-main" ref="proBody">
  <article class="p-project-main__item" ref="proItems" v-for="image in imgMd">
    <img class="p-project-main__image" :class="animation" :data-cate="image.cate" :data-index="image.index" :src="image.src" alt="" 
    @click="modal" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <h3 class="p-project-main__title" :class="animation">{{ image.title }}</h3>
  </article>
</div>

<router-link id="more-btn" class="p-project-more c-btn-square c-skin-01" tag="button" to="/more" ref="proMore" @click.native="correction">
  More Projects
</router-link>

<div class="p-project-modal" :class="{'is-show': isShow}"> 
  <div class="p-project-modal__wrap" ref="modWrap" :class="{'is-cover': isCover}">
    <article class="p-project-modal__item" :data-cate="image.cate" :data-index="image.index" ref="modItems" v-for="image in imgLg"> 
      <img class="p-project-modal__image" :class="image.class" :src="image.src" alt="">
    </article>
  </div>    
  <div class="p-project-modal__cross" @click="hide">
    <span class="p-project-modal__bar"></span>
    <span class="p-project-modal__bar"></span>
  </div>
  <div class="p-project-modal__switch">
    <button class="p-project-modal__btn p-project-modal__prev c-btn-square c-skin-02" @click="prev">
      <span class="p-project-modal__arrow p-project-modal__arrow--leftward"></span>
    </button>
    <button class="p-project-modal__btn p-project-modal__next c-btn-square c-skin-02" @click="next">
      <span class="p-project-modal__arrow p-project-modal__arrow--rightward"></span> 
    </button>
  </div>
</div>

</div>

</div></template>

<script> 
export default {
  title: 'TOMO KOIZUMI - Works',
  data: function (){
    return{
      imgMd: [
        { index: '1', src: 'images/middle/Ladygaga wears dress from ballet collection.jpeg', title: 'Ladygaga wears dress' },
        { index: '2', src: 'images/middle/perfume+costume+design.jpg', title: 'perfume live tour' },
        { index: '3', src: 'images/middle/Costume design for Hamada Bamyu Bamyu.jpeg', title: 'Hamada Bamyu Bamyu' },
        { index: '4', src: 'images/middle/Costume design for Fumi Nikaido.Shiseido"Majolica Majorca".jpg', title: 'Fumi Nikaido.Shiseido "Majolica Majorca"' },
        { index: '5', src: 'images/middle/IMG_0056.jpg', title: 'Tomo Koizumi new collection "Ballet"' },
        { index: '6', src: 'images/middle/9nine+single+cover+costume+design+styling.jpg', title: '9nine' },
        { index: '7', src: 'images/middle/meisa+kuroki2.jpeg', title: 'Meisa Kuroki' },
        { index: '8', src: 'images/middle/miliyah+kato.jpg', title: 'Miliyah Kato' }
      ],
      imgLg: [
        { index: '1', src: 'images/large/Ladygaga wears dress from ballet collection.jpeg'},
        { index: '2', src: 'images/large/perfume+costume+design.jpg'},
        { index: '3', src: 'images/large/Costume design for Hamada Bamyu Bamyu.jpeg'},
        { index: '4', src: 'images/large/Costume design for Fumi Nikaido.Shiseido"Majolica Majorca".jpg'},
        { index: '5', src: 'images/large/IMG_0056.jpg'},
        { index: '6', src: 'images/large/9nine+single+cover+costume+design+styling.jpg'},
        { index: '7', src: 'images/large/meisa+kuroki2.jpeg'},
        { index: '8', src: 'images/large/miliyah+kato.jpg'}
      ],
      isShow: false,
      isCover: false,
      isDrag: true,
      mousedownX: 0,
      mousemoveX: 0,
      touchStartX: 0,
      touchMoveX: 0,
      flagDrag: false,
      flagMove: false,
      moreBtn: ''
    }
  },
  mounted: function (){
    this.moreBtn = document.getElementById('more-btn');

  //デバイス取得
   let getDevice = (function(){
     let ua = navigator.userAgent;
      if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
          return 'sp';
      }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
          return 'tab';
      }else{
          return 'other';
      }
    })();

    //デバイスによってdragボタンを表示・非表示
    if( getDevice == 'sp' ){
      this.$refs.dragBtn.style.display = 'none';
    }else if( getDevice == 'tab' ){
      this.$refs.dragBtn.style.display = 'none';
    }else if( getDevice == 'other' ){
      this.$refs.dragBtn.style.display = 'block';
    }
    //sessionStorageリセット
    sessionStorage.removeItem('transNum');
    sessionStorage.removeItem('countModalProject');
  },
  methods: {
    mousepursuit: function(e){
      e.preventDefault();
      if(this.flagDrag == true){
        let x = e.pageX - 40 + 'px';
        let y = e.pageY - 64 + 'px';

        this.$refs.dragBtn.style.left = x;
        this.$refs.dragBtn.style.top = y;
        this.$refs.dragBtn.style.bottom = 'auto';
      }
    },
    mousedown: function(e) {
      e.preventDefault();
      this.$refs.dragBtn.classList.add('is-drag');
      this.flagDrag = this.$refs.dragBtn.classList.contains('is-drag');
      this.mousedownX = e.pageX;
      this.isDrag = false;
    },
    mousemove: function(e){
      e.preventDefault();
      if (this.flagDrag == true) {
        let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
        let width = 0;
        let speed = 20;

        this.mousemoveX = e.pageX;

        for (let i = 0; i < this.$refs.proItems.length; i++) {
          width += this.$refs.proItems[i].clientWidth;
        }
        width -= this.$refs.proItems[this.$refs.proItems.length-1].clientWidth;  

        if (this.mousedownX < this.mousemoveX) {
          if(transNum < width){
            transNum += speed;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }else{
            transNum += width - transNum;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }
        }else if (this.mousedownX > this.mousemoveX) {
          if(transNum > 0){
            transNum -= speed;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)'; 
          }else{
            transNum += transNum * -1;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }
        }

        if (transNum >= width) {
          this.moreBtn.style.right = '0px';
          this.moreBtn.style.left = 'auto';
        }
        if (transNum <= 0) {
          this.moreBtn.style.right = 'auto';
          this.moreBtn.style.left = '0px';
        }

      }
    },
    mouseup: function(e){
      e.preventDefault();
      this.$refs.dragBtn.classList.remove('is-drag');
      this.flagDrag = false;
      this.isDrag = true;
    },
    touchstart: function(e){
      e.preventDefault();
      this.touchStartX = e.touches[0].pageX;
    },
    touchmove: function(e){
      e.preventDefault();
      let width = this.$refs.proBody.clientWidth * this.$refs.proItems.length;
      let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
      let rebe = 25;

      this.touchMoveX = e.changedTouches[0].pageX;
      this.flagMove = true;

      width -= this.$refs.proBody.clientWidth;

      if (this.touchStartX > this.touchMoveX && transNum < width) {
        rebe = transNum + rebe;
        this.$refs.proBody.style.transform = 'translate3d(-'+ rebe +'px, 0, 0)';
      }else if (this.touchStartX < this.touchMoveX && transNum > 0) {
        rebe = transNum - rebe;
        this.$refs.proBody.style.transform = 'translate3d(-'+ rebe +'px, 0, 0)';
      }
    },
    touchend: function(e){
      e.preventDefault();
      let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
      let width = this.$refs.proBody.clientWidth * this.$refs.proItems.length;
      let move = width / this.$refs.proItems.length;
      let touchResult = this.touchMoveX - this.touchStartX;
      let rebe = 50;  

      width -= this.$refs.proBody.clientWidth;

      if(this.flagMove == true){
        if (touchResult > rebe || touchResult < -rebe){
          if (this.touchStartX > this.touchMoveX && transNum < width) {
            transNum += move;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }else if (this.touchStartX < this.touchMoveX && transNum > 0) {
            transNum -= move;
            sessionStorage.setItem('transNum', transNum);
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }  
        }else{
            this.$refs.proBody.style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
        }
      }else{
          let projectData = e.target.dataset;
          this.isShow = true;
          
          for (let i = 0; i < this.$refs.modItems.length; i++) {
            let modalData = this.$refs.modItems[i].dataset
              switch (modalData.index == projectData.index) {
                case true: 
                  this.$refs.modItems[i].classList.add('is-show', 'js-show');
                  break;
              }
          }
      }
      this.flagMove = false;
    },
    modal: function(e){
      e.preventDefault();
      let projectData = e.target.dataset;
      
      this.isShow = true;

      for (let i = 0; i < this.$refs.modItems.length; i++) {
        let modalData = this.$refs.modItems[i].dataset;
          switch (modalData.index == projectData.index) {
            case true: 
              this.$refs.modItems[i].classList.add('is-show', 'js-show'); 
              break;
          }
      }
    },
    hide: function(){
      this.isShow = false
      let showImage = document.getElementsByClassName('js-show');
      showImage[0].classList.remove('is-show', 'js-show');
    },
    prev: function(e){
      e.preventDefault();
      let flagCover = this.$refs.modWrap.classList.contains('is-cover');
      let showImage = document.getElementsByClassName('js-show');
      let prevImage = showImage[0].previousElementSibling;

      if (!flagCover && prevImage !== null) {
        this.isCover = true;
        setTimeout(() => {  
          showImage[0].previousElementSibling.classList.add('is-show', 'js-show');
          showImage[0].nextElementSibling.classList.remove('is-show', 'js-show');
        }, 500);    
        setTimeout(() => {
          this.isCover = false;
        }, 1200);
      }
    },
    next: function(e){
      e.preventDefault();
      let flagCover = this.$refs.modWrap.classList.contains('is-cover');
      let showImage = document.getElementsByClassName('js-show');
      let nextImage = showImage[0].nextElementSibling;    

      if (!flagCover && nextImage !== null) {
        this.isCover = true;
        setTimeout(() => {
          showImage[0].nextElementSibling.classList.add('is-show', 'js-show');
          showImage[0].classList.remove('is-show', 'js-show');  
        }, 500);
        setTimeout(() => {
          this.isCover = false;  
        }, 1200);
      }
    },
    correction: function(){
      window.scrollTo(0, 0);
      this.$store.state.pageProject = false;
      this.$store.state.pageMoreProject = true;
    }
  },
  computed: {    
    //オープン時のアニメーションクラス
    animation: function(){
      if (this.$store.state.flagOpen){
        return {
          'is-open': this.isOpen = true
        }
      }else{
        return {
          'is-open': this.isOpen = false
        }
      }
    }
  }
}
</script>