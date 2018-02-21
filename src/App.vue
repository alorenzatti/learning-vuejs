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
              <hr>
              <button class="btn btn-primary" @click="fetchData">Get</button>
              <br>
              <ul class="list-group">
                <li class="list-group-item" v-for="user in users">
                  {{ user.username}} - {{ user.email }}
                </li>
              </ul>
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
          },
          users : [],
          resource : {}
        }
      },

      created : function() {

        this.resource = this.$resource("data.json")
      },

      methods : {
        submit : function() {
          // this.$http.post("data.json", this.user)
          //   .then(function(response, error) {
          //     console.log(response)
          //     console.log(error)
          //   })
          this.resource.save({}, this.user)
        },

        fetchData : function() {
          this.$http.get("data.json")
            .then(function(response) {
              return response.json()
            })
            .then(function(data) {
              var result = []
              for(var key in data) {
                result.push(data[key])
              }
              this.users = result
            })
        }
      }
    }
</script>

<style>

</style>
