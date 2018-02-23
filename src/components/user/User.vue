<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <p>Loaded id: {{ id }}</p>
      <button @click="navigateToHome">Go home!</button>
    </div>

</template>

<script>
  export default {
    data : function() {
      return {
        id : this.$route.params.id
      }
    },

    watch : {
      "$route" : function(to, from) {
        this.id = to.params.id
      }
    },
    
    methods : {
      navigateToHome : function() {
        this.$router.push("/")
      }
    }
  }
</script>
