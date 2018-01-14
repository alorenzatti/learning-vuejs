<template>
  <div>
    <label>First name:
      <input type="text" name="firstName" v-model.lazy="firstName" @change="fullName"/>
    </label>
    <label>Last name:
      <input type="text" name="lastName" v-model.lazy="lastName" @change="fullName"/>
    </label>
  </div>
</template>

<script>
  export default {
    data : function() {
      return {
        firstName : '',
        lastName : ''
      }
    },

    computed : {
      fullName : function() {
          this.$emit('input',this.firstName + " " + this.lastName)
        }
      }
  }
</script>

<style>
  
</style>
