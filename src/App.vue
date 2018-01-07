<template>
    <div class="container">
        <appHeader
          :progressStatus="quotes.length"
          :max="maxQuotes">
            <h1 slot="headerMessage">Quotes Added</h1>
        </appHeader>
        <appNewQuote :currentQuotes="quotes.length" :maxQuotes='maxQuotes'></appNewQuote>
        <div class="quotesContainer">
          <appQuote v-for="(quote, index) in quotes" :quote="{index:index, text:quote}">
          </appQuote>
        </div>
        <div class="infoContainer">
          <p>Info: Click on a Quote to delete it</p>
        </div>
    </div>
</template>

<script>
    import {quoteBus} from './main.js'
    import Header from './components/Header.vue'
    import NewQuote from './components/NewQuote.vue'
    import Quote from './components/Quote.vue'

    export default {
        
        created : function() {
          
          quoteBus.$on('newQuote', (newQuoteText) => {
            this.newQuote(newQuoteText)
          })

          quoteBus.$on('deleteQuote', (quote) => {
            this.quotes.splice(quote,1)
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
          }
        },

        components : {
          appHeader : Header,
          appNewQuote : NewQuote,
          appQuote : Quote
        }
    }
</script>

<style scoped>
  .container {
    padding: 25px;
  }

  .quotesContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .infoContainer {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-radius: 5px;
    background-color: #d8edf7;
  }
</style>
