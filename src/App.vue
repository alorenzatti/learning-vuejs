<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-question></app-question>
      </div>
    </div>
  </div>
</template>

<script>
  import Question from "./components/Question.vue"

  export default {
    components : {
      "app-question" : Question
    }
  }
</script>

<style>

</style>
