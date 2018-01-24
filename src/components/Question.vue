<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title text-center">
        What's
        {{ question.expression.leftNumber}}
        {{ question.expression.operation}}
        {{ question.expression.rightNumber}} ?
      </h3>
    </div>
    <div class="panel-body">
      <div class="text-center">
        <button
          class="btn btn-primary btn-lg answer"
          @click="checkAnswer(answer)"
          v-for="answer in question.answers">
          {{ answer.result }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props : ["question"],

    methods : {

      checkAnswer : function(answer) {
        if(answer.correct) {
          this.$emit("right-answer")
        } else {
          this.$emit("wrong-answer")
        }
      }
    }
  }
</script>

<style scoped>
.answer {
  margin: 10px;
  padding: 25px;
}

</style>
