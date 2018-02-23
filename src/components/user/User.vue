<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <button @click="navigateToHome">Go home!</button>
    </div>

</template>

<script>
  export default {
    methods : {
      navigateToHome : function() {
        this.$router.push("/")
      }
    }
  }
</script>
