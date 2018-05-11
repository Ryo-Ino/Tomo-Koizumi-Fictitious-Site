<template>
  <transition name="router">
    <div class="overlay" v-if="trans"></div>
  </transition>
</template>

<script>
export default {
  computed: {
    trans: function() {
      return this.$store.state.flagTrans;
    }
  }
}
</script>