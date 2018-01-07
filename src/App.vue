<template>
    <div class="container">
        <appHeader
          :progressStatus="quotes.length"
          :max="maxQuotes"><h1 slot="headerMessage">Quotes Added</h1></appHeader>
        NewQuote
        AllQuotes
        SingleQuote
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        
        created : function() {
          
        },

        data : function() {
          return {
            maxQuotes : 10,
            quotes : []
          }
        },

        components : {
          appHeader : Header
        }
    }
</script>

<style scoped>
  .container {
    padding: 25px;
  }
</style>
