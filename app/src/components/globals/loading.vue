<template lang="html"><div>
  <div id="loader" class="p-loading">

    <div class="p-loading-obj">
      <canvas class="p-loading-obj__canvas" data-processing-sources="./sketch/loading.pde"></canvas>
    </div>
    
    <div class="p-loading-mess">
      <p class="p-loading-mess__text">Now loading</p>
    </div>
    
  </div>
</div></template>

<script type="text/javascript">
export default {
  data: function (){
    return{}
  },
  methods: {
  },
  mounted: function() {
    let loader = document.getElementById('loader');
    function opacity(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('success'); reject('error');
          loader.style.opacity = '0';  
        }, 5000);
      });
    }
     function display(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('success'); reject('error');
          loader.style.display = 'none';
        }, 500);
      });
    }
    window.onload = function(){
      opacity().then(display);
    }
  }
}
</script>
