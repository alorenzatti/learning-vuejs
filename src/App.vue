<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition
          mode="out-in"
          appear
          enter-active-class="animated zoomInDown"
          leave-active-class="animated zoomOutUp"
        >
          <app-question 
            v-if="showQuestion"
            :question="question"
            v-on:right-answer="onRightAnswer"
            v-on:wrong-answer="onWrongAnswer"
          >
          </app-question>
          <app-answer
            v-else
            :correct="currentAnswerCorrect"
            v-on:next-question="generateQuestion"
          >
          </app-answer>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  const ADDITION = 0
  const SUBTRACTION = 1

  import Answer from "./components/Answer.vue"
  import Question from "./components/Question.vue"

  export default {

    data : function() {
      return {
        showQuestion: true,
        currentAnswerCorrect: false,
        question : {
          expression : {
            leftNumber : 0,
            rightNumber : 0,
            operation : ""
          },
          answers : []
        } 
      }
    },

    components : {
      "app-answer" : Answer,
      "app-question" : Question
    },

    methods : {

      onRightAnswer : function() {
        this.currentAnswerCorrect = true
        this.showQuestion = false
      },

      onWrongAnswer : function() {
        this.currentAnswerCorrect = false
        this.showQuestion = false
        var self = this
        setTimeout(function() {
          self.showQuestion = true
        }, 3000)
      },

      generateQuestion : function() {
        
        this.currentAnswerCorrect = false
        this.generateWrongAnswers(9, 100)
        this.generateExpression()
        this.showQuestion = true
      },

      generateExpression : function() {

        var operation = this.generateOperation()
        var leftNumber = this.generateNumber(50)
        var rightNumber = this.generateNumber(50)
        var result = 0
        var strOperation = ""
        switch(operation) {
          case ADDITION : 
            result = leftNumber + rightNumber
            strOperation = "+"
            break;
          case SUBTRACTION :
            result = leftNumber - rightNumber
            strOperation = "-"
            break;
        }

        this.question.expression.leftNumber = leftNumber
        this.question.expression.rightNumber = rightNumber
        this.question.expression.operation = strOperation
        var index = Math.floor(Math.random() * (this.question.answers.length + 1))
        this.question.answers.splice(index, 0, {result: result, correct: true})
      },

      generateOperation : function() {

        return Math.round(Math.random())
      },

      generateNumber : function(max) {

        return Math.floor(Math.random() * max)
      },

      generateWrongAnswers : function(amount, max) {
        var i = 0
        this.question.answers.length = 0
        while (i++ < amount) {
          var number = this.generateNumber(max) * (Math.random() >= 0.5 ? 1 : -1)

          this.question.answers.push({result:number, correct: false})
        }
      }
    },

    created : function() {

      this.generateQuestion()
    }
  }
</script>

<style>
</style>
