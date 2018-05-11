<template><div>

<!-- header -->
<header id="top" class="l-header">

  <div class="l-header-inner">

    <h1 class="l-header-logo c-heading-01">
      <router-link to="/" class="is-logoani-01" @click.native="reload">TOMO<br>KOIZUMI</router-link>
    </h1>

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
