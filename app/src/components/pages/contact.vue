<template><div>

<div class="l-main">

  <form class="p-form" action="" method="post">

    <fieldset class="p-form-item">
      <label class="p-form-item__title" for="name">Name</label>        
      <input id="name" class="p-form-item__input"
        type="text"
        name="name"
        v-validate.disable="'required'"
      />
      <p class="p-form-item__error">{{ errors.first('name') }}</p>
    </fieldset>

    <fieldset class="p-form-item" for="email">
      <label class="p-form-item__title">Email</label>        
      <input id="email" class="p-form-item__input"
        type="email"
        name="email"
        v-validate.disable="'required|email'"
      />
      <p class="p-form-item__error">{{ errors.first('email') }}</p>
    </fieldset>
    
    <fieldset class="p-form-item">
      <label class="p-form-item__title" for="subject">Subject</label>   
      <input id="subject" class="p-form-item__input" 
        type="text" 
        name="subject"
        v-validate.disable="'required'"
      />
      <p class="p-form-item__error">{{ errors.first('subject') }}</p>
    </fieldset>

    <fieldset class="p-form-item">
      <label class="p-form-item__title" for="message">Message</label>
      <textarea id="message" class="p-form-item__input p-form-item__input--mess" 
        name="message"
        v-validate.disable="'required'">
      </textarea>
      <p class="p-form-item__error">{{ errors.first('message') }}</p>
    </fieldset>    

    <button class="p-form-submit c-btn-square c-skin-01"
    type="submit" @click.prevent="doValidation">
      Submit
    </button>

  </form>

</div>

</div></template>

<script>
export default {
  title: 'TOMO KOIZUMI - Contact',
  data: function (){
    return{}
  },
  methods:{
    doValidation: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log('Form Submitted!');
          return;
        }
        console.log('Correct them errors!');
      });
    }
  }
}
</script>
