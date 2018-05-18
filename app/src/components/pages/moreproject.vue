<template><div>

<div class="l-main">

<div class="p-moreproject">

  <section class="p-moreproject-section">
    <h2 class="p-moreproject-section__title c-heading-02">Colection</h2>
    
    <div class="p-moreproject-body">

      <article class="p-moreproject-article" v-for="image in imgsMd01">
        <img class="p-moreproject-article__image" :data-cate="image.cate" :data-index="image.index"  :src="image.src" alt="" @click="modal">
        <h3 class="p-moreproject-article__title">{{ image.title }}</h3>
      </article>
      
    </div>

  </section>

  <section class="p-moreproject-section">
    <h2 class="p-moreproject-section__title c-heading-02">Design Archive</h2>

    <div class="p-moreproject-body">

      <article class="p-moreproject-article" v-for="image in imgsMd02">
        <img class="p-moreproject-article__image" :data-cate="image.cate" :data-index="image.index" :src="image.src" alt="" @click="modal">
        <h3 class="p-moreproject-article__title">{{ image.title }}</h3>
      </article>

    </div>

  </section>

  <section class="p-moreproject-section">
    <h2 class="p-moreproject-section__title c-heading-02">Costume Design</h2>

    <div class="p-moreproject-body">

      <article class="p-moreproject-article" v-for="image in imgsMd03">
        <img class="p-moreproject-article__image" :data-cate="image.cate" :data-index="image.index" :src="image.src" alt="" @click="modal">
        <h3 class="p-moreproject-article__title">{{image.title}}</h3>
      </article>

    </div>

  </section>

  <div class="p-moreproject-modal" :class="{'is-show': isShow}"> 
    <div class="p-moreproject-modal__body" ref="modBody" :class="{'is-cover': isCover}">
      <article class="p-moreproject-modal__wrap js-cate-colection" :data-cate="image.cate" :data-index="image.index" v-for="image in imgsLg01"> 
        <img class="p-moreproject-modal__image" :src="image.src" alt="">
        <h3 class="p-moreproject-modal__title"></h3>
      </article>
       <article class="p-moreproject-modal__wrap js-cate-archive" :data-cate="image.cate" :data-index="image.index" v-for="image in imgsLg02"> 
        <img class="p-moreproject-modal__image" :src="image.src" alt="">
        <h3 class="p-moreproject-modal__title"></h3>
      </article>
       <article class="p-moreproject-modal__wrap js-cate-costume" :data-cate="image.cate" :data-index="image.index" v-for="image in imgsLg03"> 
        <img class="p-moreproject-modal__image" :src="image.src" alt="">
        <h3 class="p-moreproject-modal__title"></h3>
      </article>
    </div>    
    <div class="p-moreproject-modal__cross" @click="hide">
      <span class="p-moreproject-modal__bar"></span>
      <span class="p-moreproject-modal__bar"></span>
    </div>
    <div class="p-moreproject-modal__switch">
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
export default {
  data: function (){
    return{
      imgsMd01: [
        { cate: 'colection', index: '1', src: 'images/middle/IMG_0056.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '2', src: 'images/middle/IMG_0132.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '3', src: 'images/middle/IMG_0412.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '4', src: 'images/middle/IMG_0559.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '5', src: 'images/middle/IMG_0671.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '6', src: 'images/middle/IMG_0727.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '7', src: 'images/middle/IMG_0861.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '8', src: 'images/middle/IMG_1105.jpg', title: 'Tomo koizumi new collection "BALLET"' },
        { cate: 'colection', index: '9', src: 'images/middle/IMG_1263.jpg', title: 'Tomo koizumi new collection "BALLET"' }
      ],
      imgsLg01: [
        { cate: 'colection', index: '1', src: 'images/large/IMG_0056.jpg',},
        { cate: 'colection', index: '2', src: 'images/large/IMG_0132.jpg',},
        { cate: 'colection', index: '3', src: 'images/large/IMG_0412.jpg',},
        { cate: 'colection', index: '4', src: 'images/large/IMG_0559.jpg',},
        { cate: 'colection', index: '5', src: 'images/large/IMG_0671.jpg',},
        { cate: 'colection', index: '6', src: 'images/large/IMG_0727.jpg',},
        { cate: 'colection', index: '7', src: 'images/large/IMG_0861.jpg',},
        { cate: 'colection', index: '8', src: 'images/large/IMG_1105.jpg',},
        { cate: 'colection', index: '9', src: 'images/large/IMG_1263.jpg',}
      ],
      imgsMd02: [
        { cate: 'archive', index: '1', src: 'images/middle/001.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '2', src: 'images/middle/002.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '3', src: 'images/middle/003.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '4', src: 'images/middle/004.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '5', src: 'images/middle/005.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '6', src: 'images/middle/006.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '7', src: 'images/middle/007.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '8', src: 'images/middle/008.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '9', src: 'images/middle/009.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '10', src: 'images/middle/010.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '11', src: 'images/middle/011.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '12', src: 'images/middle/012.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '13', src: 'images/middle/013.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '14', src: 'images/middle/014.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '15', src: 'images/middle/002-1.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '16', src: 'images/middle/003-1.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '17', src: 'images/middle/004-1.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '18', src: 'images/middle/005-1.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '19', src: 'images/middle/006-1.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '20', src: 'images/middle/design+archive.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '21', src: 'images/middle/design+archive2.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '22', src: 'images/middle/design+archive3.jpg', title: 'Design Archive' },
        { cate: 'archive', index: '23', src: 'images/middle/design+archive4.jpeg', title: 'Design Archive' },
        { cate: 'archive', index: '24', src: 'images/middle/design+archive5.jpg', title: 'Design Archive' }
      ],
      imgsLg02: [
        { cate: 'archive', index: '1', src: 'images/large/001.jpg'},
        { cate: 'archive', index: '2', src: 'images/large/002.jpg'},
        { cate: 'archive', index: '3', src: 'images/large/003.jpg'},
        { cate: 'archive', index: '4', src: 'images/large/004.jpg'},
        { cate: 'archive', index: '5', src: 'images/large/005.jpg'},
        { cate: 'archive', index: '6', src: 'images/large/006.jpg'},
        { cate: 'archive', index: '7', src: 'images/large/007.jpg'},
        { cate: 'archive', index: '8', src: 'images/large/008.jpg'},
        { cate: 'archive', index: '9', src: 'images/large/009.jpg'},
        { cate: 'archive', index: '10', src: 'images/large/010.jpg'},
        { cate: 'archive', index: '11', src: 'images/large/011.jpg'},
        { cate: 'archive', index: '12', src: 'images/large/012.jpg'},
        { cate: 'archive', index: '13', src: 'images/large/013.jpg'},
        { cate: 'archive', index: '14', src: 'images/large/014.jpg'},
        { cate: 'archive', index: '15', src: 'images/large/002-1.jpg'},
        { cate: 'archive', index: '16', src: 'images/large/003-1.jpg'},
        { cate: 'archive', index: '17', src: 'images/large/004-1.jpg'},
        { cate: 'archive', index: '18', src: 'images/large/005-1.jpg'},
        { cate: 'archive', index: '19', src: 'images/large/006-1.jpg'},
        { cate: 'archive', index: '20', src: 'images/large/design+archive.jpg'},
        { cate: 'archive', index: '21', src: 'images/large/design+archive2.jpg'},
        { cate: 'archive', index: '22', src: 'images/large/design+archive3.jpg'},
        { cate: 'archive', index: '23', src: 'images/large/design+archive4.jpeg'},
        { cate: 'archive', index: '24', src: 'images/large/design+archive5.jpg'}
      ],
      imgsMd03: [
        { cate: 'costume', index: '1', src: 'images/middle/9nine+single+cover+costume+design+styling.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '2', src: 'images/middle/9nine+costume+design+a-nation.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '3', src: 'images/middle/9nine+costume+design.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '4', src: 'images/middle/ai+tominaga+.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '5', src: 'images/middle/ai+tominaga2.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '6', src: 'images/middle/BENI+costume+design+live+tour.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '7', src: 'images/middle/beni+live+tour+costume+design+3.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '8', src: 'images/middle/BENI+styling.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '9', src: 'images/middle/beni+styling3.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '10', src: 'images/middle/beni+styling4.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '11', src: 'images/middle/color-code+costume+design+tokyo+girls+collection.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '12', src: 'images/middle/color-code+costume+design.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '13', src: 'images/middle/color-code+tokyo+girls+collection.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '14', src: 'images/middle/hongkong+adidas+fashion+show+costume+design.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '15', src: 'images/middle/mademoiselle+yulia.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '16', src: 'images/middle/mademoiselle+yulia+costume+design.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '17', src: 'images/middle/MAKIII+single+cover+costume+design.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '18', src: 'images/middle/MAKIII+single+cover+costume+design+2.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '19', src: 'images/middle/mari+natsuki+costume+design+tokyo+rainbow+parade.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '20', src: 'images/middle/mari+natsuki+costume+design+tokyo+rainbow+parade2.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '21', src: 'images/middle/mari+natsuki+styling.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '22', src: 'images/middle/meisa+kuroki.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '23', src: 'images/middle/meisa+kuroki+single+cover+.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '24', src: 'images/middle/meisa+kuroki+single+MV+costume+design.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '25', src: 'images/middle/meisa+kuroki2.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '26', src: 'images/middle/miliyah+kato.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '27', src: 'images/middle/miliyah+kato2.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '28', src: 'images/middle/miliyah+kato+costume+design.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '29', src: 'images/middle/miliyah+kato+costume+design2.jpeg', title: 'Costume Design' },
        { cate: 'costume', index: '30', src: 'images/middle/perfume+costume+design.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '31', src: 'images/middle/perfume+costume+design+live+tour.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '32', src: 'images/middle/Rio+single+cover+costume+design.jpg', title: 'Costume Design' },
        { cate: 'costume', index: '33', src: 'images/middle/YOON.png', title: 'Costume Design' },
        { cate: 'costume', index: '34', src: 'images/middle/yuki+koyanagi+costume+design.jpeg', title: 'Costume Design' }
      ],
      imgsLg03: [
        { cate: 'costume', index: '1', src: 'images/large/9nine+single+cover+costume+design+styling.jpg'},
        { cate: 'costume', index: '2', src: 'images/large/9nine+costume+design+a-nation.jpeg'},
        { cate: 'costume', index: '3', src: 'images/large/9nine+costume+design.jpeg'},
        { cate: 'costume', index: '4', src: 'images/large/ai+tominaga+.jpg'},
        { cate: 'costume', index: '5', src: 'images/large/ai+tominaga2.jpg'},
        { cate: 'costume', index: '6', src: 'images/large/BENI+costume+design+live+tour.jpeg'},
        { cate: 'costume', index: '7', src: 'images/large/beni+live+tour+costume+design+3.jpeg'},
        { cate: 'costume', index: '8', src: 'images/large/BENI+styling.jpeg'},
        { cate: 'costume', index: '9', src: 'images/large/beni+styling3.jpeg'},
        { cate: 'costume', index: '10', src: 'images/large/beni+styling4.jpeg'},
        { cate: 'costume', index: '11', src: 'images/large/color-code+costume+design+tokyo+girls+collection.jpg'},
        { cate: 'costume', index: '12', src: 'images/large/color-code+costume+design.jpg'},
        { cate: 'costume', index: '13', src: 'images/large/color-code+tokyo+girls+collection.jpeg'},
        { cate: 'costume', index: '14', src: 'images/large/hongkong+adidas+fashion+show+costume+design.jpeg'},
        { cate: 'costume', index: '15', src: 'images/large/mademoiselle+yulia.jpeg'},
        { cate: 'costume', index: '16', src: 'images/large/mademoiselle+yulia+costume+design.jpeg'},
        { cate: 'costume', index: '17', src: 'images/large/MAKIII+single+cover+costume+design.jpeg'},
        { cate: 'costume', index: '18', src: 'images/large/MAKIII+single+cover+costume+design+2.jpg'},
        { cate: 'costume', index: '19', src: 'images/large/mari+natsuki+costume+design+tokyo+rainbow+parade.jpeg'},
        { cate: 'costume', index: '20', src: 'images/large/mari+natsuki+costume+design+tokyo+rainbow+parade2.jpeg'},
        { cate: 'costume', index: '21', src: 'images/large/mari+natsuki+styling.jpeg'},
        { cate: 'costume', index: '22', src: 'images/large/meisa+kuroki.jpeg'},
        { cate: 'costume', index: '23', src: 'images/large/meisa+kuroki+single+cover+.jpeg'},
        { cate: 'costume', index: '24', src: 'images/large/meisa+kuroki+single+MV+costume+design.jpg'},
        { cate: 'costume', index: '25', src: 'images/large/meisa+kuroki2.jpeg'},
        { cate: 'costume', index: '26', src: 'images/large/miliyah+kato.jpg'},
        { cate: 'costume', index: '27', src: 'images/large/miliyah+kato2.jpg'},
        { cate: 'costume', index: '28', src: 'images/large/miliyah+kato+costume+design.jpg'},
        { cate: 'costume', index: '29', src: 'images/large/miliyah+kato+costume+design2.jpeg'},
        { cate: 'costume', index: '30', src: 'images/large/perfume+costume+design.jpg'},
        { cate: 'costume', index: '31', src: 'images/large/perfume+costume+design+live+tour.jpg'},
        { cate: 'costume', index: '32', src: 'images/large/Rio+single+cover+costume+design.jpg'},
        { cate: 'costume', index: '33', src: 'images/large/YOON.png'},
        { cate: 'costume', index: '34', src: 'images/large/yuki+koyanagi+costume+design.jpeg'}
      ],
      isShow: false,
      isFlashig: false,
      isCover: false
    }
  },
  methods: {
    mounted: function (){
      //sessionStorageリセット
      sessionStorage.removeItem('countModalMoreproject');
    },
    modal: function(e){
      e.preventDefault();
      let moreprojectData = e.target.dataset;
      let colections = document.getElementsByClassName('js-cate-colection');
      let archives = document.getElementsByClassName('js-cate-archive');
      let costumes = document.getElementsByClassName('js-cate-costume');

      this.isShow = true;

      if(colections[0].dataset.cate == moreprojectData.cate){
        for (let i = 0; i < colections.length; i++) {
        let modalData = colections[i].dataset
          switch (modalData.index == moreprojectData.index) {
            case true: 
              colections[i].classList.add('is-show', 'js-show'); 
              break;
          }
        }
      }else if (archives[0].dataset.cate == moreprojectData.cate) {
        for (let i = 0; i < archives.length; i++) {
        let modalData = archives[i].dataset
          switch (modalData.index == moreprojectData.index) {
            case true: 
              archives[i].classList.add('is-show', 'js-show'); 
              break;
          }
        }
      }else if (costumes[0].dataset.cate == moreprojectData.cate) {
        for (let i = 0; i < costumes.length; i++) {
        let modalData = costumes[i].dataset
          switch (modalData.index == moreprojectData.index) {
            case true: 
              costumes[i].classList.add('is-show', 'js-show'); 
              break;
          }
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
      let flagCover = this.$refs.modBody.classList.contains('is-cover');
      let showImage = document.getElementsByClassName('js-show');
      let prevImage = showImage[0].previousElementSibling;

      if (!flagCover && prevImage !== null) {
        this.isCover = true 
        setTimeout(() => {  
          showImage[0].previousElementSibling.classList.add('is-show', 'js-show');
          showImage[0].nextElementSibling.classList.remove('is-show', 'js-show');
        }, 500);    
        setTimeout(() => {
          this.isCover = false  
        }, 1200);
      }
    },
    next: function(e){
      e.preventDefault();
      let flagCover = this.$refs.modBody.classList.contains('is-cover');
      let showImage = document.getElementsByClassName('js-show');
      let nextImage = showImage[0].nextElementSibling;    

      if (!flagCover && nextImage !== null) {
        this.isCover = true 
        setTimeout(() => {
          showImage[0].nextElementSibling.classList.add('is-show', 'js-show');
          showImage[0].classList.remove('is-show', 'js-show');  
        }, 500);
        setTimeout(() => {
          this.isCover = false  
        }, 1200);
      }
    } 
  }
}
</script>
