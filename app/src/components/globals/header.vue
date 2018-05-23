<template><div>

<!-- header -->
<header id="top" class="l-header">

  <div class="l-header__wrap">

  <router-link to="/" tag="h1" class="l-header__logo" @click.native="reload">TOMO<br>KOIZUMI</router-link>
  
  </div>

</header>

</div></template>

<script type="text/javascript">
export default {
  data: function (){
    return{
    }
  },
  methods: {
    reload() {
      location.reload();
    }
  },
  mounted() {
  }
}
</script>
