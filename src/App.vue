<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>HTTP</h1>
              <div class="form-group">
                <label>Username</label>
                <input class="form-control" type="text" v-model="user.username">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="text" v-model="user.email">
              </div>
              <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

      data : function() {
        return {
          user : {
            username : "",
            email : ""
          }
        }
      },

      methods : {
        submit : function() {
          this.$http.post("https://alorenza-learning-vuejs.firebaseio.com/data.json", this.user)
            .then(function(response, error) {
              console.log(response)
              console.log(error)
            })
        }
      }
    }
</script>

<style>

</style>
