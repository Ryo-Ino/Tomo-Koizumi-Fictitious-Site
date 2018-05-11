<template><div>

<div class="l-main">

<div id="app" class="p-project" @mousemove="mousepursuit">

<button id="drag-btn" class="p-project-drag c-btn-circle c-skin-01" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
  Drag Me
</button>

  <div class="p-project-body">

    <article class="p-project-article c-article" v-for="image in imgMd">
      <img :id="image.id" class="p-project-article__image" :class="animation" :data-cate="image.cate" :data-index="image.index" :src="image.src" alt="" @click="modal"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <h3 class="p-project-article__title c-heading-02" :class="animation">{{ image.title }}</h3>
    </article>

  </div>

   <router-link class="p-project-more c-btn-square c-skin-01" tag="button" to="/more" @click.native="correction">
    More Projects
  </router-link>

  <div class="p-project-modal" :class="{'is-show': isShow}"> 
    <div class="p-project-modal__body" :class="{'is-cover': isCover}">
      <div class="p-project-modal__wrap" :data-cate="image.cate" :data-index="image.index" v-for="image in imgLg"> 
        <img :id="image.id" class="p-project-modal__image" :class="image.class" :src="image.src" alt="">
        <h3 class="p-project-modal__title"></h3>
      </div>
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

</div>

</div></template>

<script>
let mousedownX = 0;
let mousemoveX = 0;
let touchStartX = 0;
let touchMoveX = 0;
let dragBtn;
let flagDrag = false;
let flagMove = false;
let container;
let items;
let body; 
 
export default {
  title: 'TOMO KOIZUMI - Works',
  data: function (){
    return{
      imgMd: [
        { id: 'image-md-1', index: '1', src: 'images/middle/Ladygaga wears dress from ballet collection.jpeg', title: 'Ladygaga wears dress' },
        { id: 'image-md-2', index: '2', src: 'images/middle/perfume+costume+design.jpg', title: 'perfume live tour' },
        { id: 'image-md-3', index: '3', src: 'images/middle/Costume design for Hamada Bamyu Bamyu.jpeg', title: 'Hamada Bamyu Bamyu' },
        { id: 'image-md-4', index: '4', src: 'images/middle/Costume design for Fumi Nikaido.Shiseido"Majolica Majorca".jpg', title: 'Fumi Nikaido.Shiseido "Majolica Majorca"' },
        { id: 'image-md-5', index: '5', src: 'images/middle/IMG_0056.jpg', title: 'Tomo Koizumi new collection "Ballet"' },
        { id: 'image-md-6', index: '6', src: 'images/middle/9nine+single+cover+costume+design+styling.jpg', title: '9nine' },
        { id: 'image-md-7', index: '7', src: 'images/middle/meisa+kuroki2.jpeg', title: 'Meisa Kuroki' },
        { id: 'image-md-8', index: '8', src: 'images/middle/miliyah+kato.jpg', title: 'Miliyah Kato' }
      ],
      imgLg: [
        { id: 'image-lg-1', index: '1', src: 'images/large/Ladygaga wears dress from ballet collection.jpeg'},
        { id: 'image-lg-2', index: '2', src: 'images/large/perfume+costume+design.jpg'},
        { id: 'image-lg-3', index: '3', src: 'images/large/Costume design for Hamada Bamyu Bamyu.jpeg'},
        { id: 'image-lg-4', index: '4', src: 'images/large/Costume design for Fumi Nikaido.Shiseido"Majolica Majorca".jpg'},
        { id: 'image-lg-5', index: '5', src: 'images/large/IMG_0056.jpg'},
        { id: 'image-lg-6', index: '6', src: 'images/large/9nine+single+cover+costume+design+styling.jpg'},
        { id: 'image-lg-7', index: '7', src: 'images/large/meisa+kuroki2.jpeg'},
        { id: 'image-lg-8', index: '8', src: 'images/large/miliyah+kato.jpg'}
      ],
      isShow: false,
      isFlashig: false,
      modalId: '',
      modalSrc: '',
      isCover: false,
      discoloration: false,
      isDrag: true
    }
  },
  methods: {
    mousepursuit: function(e){
      e.preventDefault();
      if(flagDrag == true){
        let x = e.pageX - 40 + 'px';
        let y = e.pageY - 64 + 'px';

        dragBtn.style.left = x;
        dragBtn.style.top = y;
        dragBtn.style.bottom = 'auto';
      }
    },
    mousedown: function(e) {
      e.preventDefault();
      dragBtn = document.getElementById('drag-btn');
      dragBtn.classList.add('is-drag');
      flagDrag = dragBtn.classList.contains('is-drag');
      mousedownX = e.pageX;
      this.isDrag = false;
    },
    mousemove: function(e){
      e.preventDefault();
      if (flagDrag == true) {
        body = document.getElementsByClassName('p-project-body');
        items = document.getElementsByClassName('p-project-article');
        let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
        let width = 0;
        let speed = 20;

        mousemoveX = e.pageX;
        for (var i = 0; i < items.length; i++) {
          width += items[i].clientWidth;
        }
        width -= items[items.length-1].clientWidth;  

        if (mousedownX < mousemoveX) {
          if(transNum < width){
            transNum += speed;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }else{
            transNum += width - transNum;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }
        }else if (mousedownX > mousemoveX) {
          if(transNum > 0){
            transNum -= speed;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)'; 
          }else{
            transNum += transNum * -1;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }
        }

        let more = document.getElementsByClassName('p-project-more');
        if (transNum >= width) {
          more[0].style.right = '-32px';
          more[0].style.left = 'auto';
        }
        if (transNum <= 0) {
          more[0].style.right = 'auto';
          more[0].style.left = '-32px';
        }

      }
    },
    mouseup: function(e){
      e.preventDefault();
      dragBtn.classList.remove('is-drag');
      flagDrag = false;
      this.isDrag = true;
    },
    touchstart: function(e){
      e.preventDefault();
      touchStartX = e.touches[0].pageX;
    },
    touchmove: function(e){
      e.preventDefault();
      touchMoveX = e.changedTouches[0].pageX;
      flagMove = true;
      body = document.getElementsByClassName('p-project-body');
      items = document.getElementsByClassName('p-project-article');
      let width = body[0].clientWidth * items.length;
      let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
      let rebe = 25;

      width -= body[0].clientWidth;

      if (touchStartX > touchMoveX && transNum < width) {
        rebe = transNum + rebe;
        body[0].style.transform = 'translate3d(-'+ rebe +'px, 0, 0)';
      }else if (touchStartX < touchMoveX && transNum > 0) {
        rebe = transNum - rebe;
        body[0].style.transform = 'translate3d(-'+ rebe +'px, 0, 0)';
      }
    },
    touchend: function(e){
      e.preventDefault();
      body = document.getElementsByClassName('p-project-body');
      items = document.getElementsByClassName('p-project-article');
      let transNum = parseInt(sessionStorage.getItem('transNum')) || parseInt(0);
      let width = body[0].clientWidth * items.length;
      let move = width / items.length;
      let touchResult = touchMoveX - touchStartX;
      let rebe = 50;  

      width -= body[0].clientWidth;

      if(flagMove == true){
        if (touchResult > rebe || touchResult < -rebe){
          if (touchStartX > touchMoveX && transNum < width) {
            transNum += move;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }else if (touchStartX < touchMoveX && transNum > 0) {
            transNum -= move;
            sessionStorage.setItem('transNum', transNum);
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
          }  
        }else{
            body[0].style.transform = 'translate3d(-'+ transNum +'px, 0, 0)';
        }
      }else{
          let projectData = e.target.dataset;
          let modalImages = document.getElementsByClassName('p-project-modal__wrap');
          this.isShow = true;
          
          for (let i = 0; i < modalImages.length; i++) {
            let modalData = modalImages[i].dataset
              switch (modalData.index == projectData.index) {
                case true: 
                  modalImages[i].classList.add('is-show', 'js-show');
                  break;
              }
          }
      }
      flagMove = false;
    },
    modal: function(e){
      e.preventDefault();
      let projectData = e.target.dataset;
      let modalImages = document.getElementsByClassName('p-project-modal__wrap');
      
      this.isShow = true;         
      for (let i = 0; i < modalImages.length; i++) {
        let modalData = modalImages[i].dataset;
          switch (modalData.index == projectData.index) {
            case true: 
              modalImages[i].classList.add('is-show', 'js-show'); 
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
      let body = document.getElementsByClassName('p-project-modal__body');
      let flagCover = body[0].classList.contains('is-cover');
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
      let body = document.getElementsByClassName('p-project-modal__body');
      let flagCover = body[0].classList.contains('is-cover');
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
  },
  mounted: function (){
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
    dragBtn = document.getElementById('drag-btn');
    if( getDevice == 'sp' ){
      dragBtn.style.display = 'none';
    }else if( getDevice == 'tab' ){
      dragBtn.style.display = 'none';
    }else if( getDevice == 'other' ){
      dragBtn.style.display = 'block';
    }

    //sessionStorageリセット
    sessionStorage.removeItem('transNum');
    sessionStorage.removeItem('countModalProject');
  }
}
</script>