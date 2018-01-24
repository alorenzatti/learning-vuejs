<template>
  <div
    class="alert text-center"
    :class="alertClass">
    <div v-if="correct">
      <h1>That's Correct!</h1>
      <hr>
      <button class="btn btn-primary" @click="onNextQuestion">Next question</button>
    </div>
    <div v-else>
      <h1>Try again!</h1>
    </div>

  </div>
</template>
<style>

</style>
<script>

  export default{
    props : ["correct"],

    computed : {
      alertClass : function() {

        return this.correct ? "alert-success" : "alert-danger"
      }
    },

    methods: {
      onNextQuestion() {
        this.$emit('next-question');
      }
    }
  }
</script>
