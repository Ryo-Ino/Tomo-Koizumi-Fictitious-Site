<template><div>

<div id="wrap" @scroll="handleScroll">

<hero-view></hero-view>

<header-view></header-view>

<navigation-view></navigation-view>
<scroll-view :scroll="scrollY"></scroll-view>

  <div id="container">

    <trans-view></trans-view>
    
    <div id="myCanvas"></div>
    
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>

<footer-view></footer-view>

</div>

</div></template>

<script>
import HeaderView from './components/globals/header.vue';
import FooterView from './components/globals/footer.vue';
import HeroView from './components/globals/hero.vue';
import ScrollView from './components/globals/scrollTop.vue';
import NavigationView from './components/globals/navigation.vue';
import TransView from './components/globals/trans.vue';

export default {
  components: {
    'header-view': HeaderView,
    'footer-view': FooterView,
    'hero-view': HeroView,
    'scroll-view': ScrollView,
    'navigation-view': NavigationView,
    'trans-view': TransView
  },
  data: function (){
    return{
      scrollY: 0
    }
  },
  mounted: function(){
    window.addEventListener('scroll', this.handleScroll);

    window.onorientationchange = function(){
      location.reload();
    };
  },
  methods:{
    handleScroll(e) {
      this.scrollY = window.scrollY;
    },
    anime: function(){
      let item = document.getElementsByClassName('p-project-menu__item');
      let display = document.getElementsByClassName('p-project-display');
      console.log(item);

      for (let i = 0; i < item.length; i++){
        item[i].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        item[i].style.transitionDelay = '1.'+[i*2]+'s';
      }
      for (let i = 0; i < display.length; i++) {
        display[i].style.transform = 'scale(1,1)';
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.fade-enter-active {
  transition: all .4s ease-in;
  transition-delay: 1.2s;
}
.fade-leave-active {
  transition: all .4s ease-in;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
