<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Query: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm?</button>
    <div style= "height: 1700px;"></div>
    <p id="data">Some extra</p>
  </div>
</template>

<script>
  export default {
    data : function() {
      return {
        confirmed : false
      }
    },

    beforeRouteLeave : function(to, from, next) {
      if(this.confirmed) {
        next()
      } else {
        if(confirm("Are you sure?")) {
          next()
        } else {
          next(false)
        }
      }
    }
  }
</script>
