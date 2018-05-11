<template><div>

<div class="p-scroll c-btn-circle c-skin-01" v-if="scroll > 300" v-scroll-to="'#top'">
  <span class="p-scroll__arrow"></span>
  <p class="p-scroll__text">Top</p>
</div>

</div></template>

<script type="text/javascript">
export default {
  props:[ 'scroll' ]
}
</script>
