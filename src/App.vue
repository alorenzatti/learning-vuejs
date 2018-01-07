<template>
    <div class="container">
        <appHeader
          :progressStatus="quotes.length"
          :max="maxQuotes">
            <h1 slot="headerMessage">Quotes Added</h1>
        </appHeader>
        <appNewQuote></appNewQuote>
        NewQuote
        AllQuotes
        SingleQuote
    </div>
</template>

<script>
    import {quoteBus} from './main.js'
    import Header from './components/Header.vue'
    import NewQuote from './components/NewQuote.vue'

    export default {
        
        created : function() {
          
          quoteBus.$on('newQuote', (newQuoteText) => {
            this.newQuote(newQuoteText)
          })
        },

        data : function() {
          return {
            maxQuotes : 10,
            quotes : []
          }
        },

        methods : {
          newQuote : function(newQuoteText) {

            this.quotes.push(newQuoteText)
            if(this.quotes.length == this.maxQuotes) {
              quoteBus.$emit('maxQuotesReached')
            }
          }
        },

        components : {
          appHeader : Header,
          appNewQuote : NewQuote
        }
    }
</script>

<style scoped>
  .container {
    padding: 25px;
  }
</style>
