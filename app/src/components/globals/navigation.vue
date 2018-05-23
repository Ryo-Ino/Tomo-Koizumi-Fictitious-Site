<template lang="html"><div>

  <nav class="p-nav">

      <ul class="p-nav-menu">
        <li class="p-nav-menu__item">
          <router-link to="/" class="p-nav-menu__text is-hover" @click.native="pageMove()">
            <span class="p-nav-menu__word--works" :class="{'is-show': this.$store.state.pageProject}">Works</span>
            <span class="p-nav-menu__word--home" :class="{'is-show': this.$store.state.pageMoreProject}">Home</span>
          </router-link>
        </li>
        <li class="p-nav-menu__item">
          <router-link to="/about" class="p-nav-menu__text is-hover" @click.native="pageMove()">About</router-link>
        </li>
        <li class="p-nav-menu__item">
          <router-link to="/contact" class="p-nav-menu__text is-hover" @click.native="pageMove()">Contact</router-link>
        </li>
        <li class="p-nav-menu__item">
          <router-link to="" class="p-nav-menu__sns">
            <i class="l-footer-sns__icon fab fa-facebook-f"></i>
          </router-link>
        </li>
        <li class="p-nav-menu__item">
          <router-link to="" class="p-nav-menu__sns">
            <i class="l-footer-sns__icon fab fa-twitter"></i>
          </router-link>
        </li> 
        <li class="p-nav-menu__item">
          <router-link to="" class="p-nav-menu__sns">
            <i class="l-footer-sns__icon fab fa-instagram"></i>
          </router-link>
        </li>
      </ul>

      <div class="p-nav-hambtn" :class="{'is-active': isActive}" @click="navActive">
        <span class="p-nav-hambtn__ber"></span>
        <span class="p-nav-hambtn__ber"></span>
        <span class="p-nav-hambtn__ber"></span> 
      </div>

  </nav>

<!-- sidebar -->
<nav class="p-sidebar" :class="{'is-active': isActive}">

    <ul class="p-sidebar-menu">
        <router-link to="/" tag="li" class="p-sidebar-menu__item" @click.native="navActive(); pageMove()">
          <span class="p-nav-menu__word--works" :class="{'is-show': this.$store.state.pageProject}">Works</span>
          <span class="p-nav-menu__word--home" :class="{'is-show': this.$store.state.pageMoreProject}">Home</span>
        </router-link>
        <router-link to="/about" tag="li" class="p-sidebar-menu__item"　@click.native="navActive(); pageMove()">About</router-link>
        <router-link to="/contact" tag="li" class="p-sidebar-menu__item" @click.native="navActive();
         pageMove()">Contact</router-link>
    </ul>

    <ul class="p-sidebar-sns">
      <router-link to="" tag="li" class="p-sidebar-sns__item">
        <i class="l-footer-sns__icon fab fa-facebook-f"></i>
      </router-link>
      <router-link to="" tag="li" class="p-sidebar-sns__item">
        <i class="l-footer-sns__icon fab fa-twitter"></i>
      </router-link>
      <router-link to="" tag="li" class="p-sidebar-sns__item">
        <i class="l-footer-sns__icon fab fa-instagram"></i>
      </router-link>
    </ul>

</nav>

</div></template>

<script type="text/javascript">
export default {
  data: function (){
    return{
      isActive: false
    }
  },
  methods: {
    navActive: function(){
      this.isActive = !this.isActive;
    },
    pageMove: function(){
      this.$store.state.pageProject = true;
      this.$store.state.pageMoreProject = false;
      window.scrollTo(0, 0);
    }
  }
}
</script>
