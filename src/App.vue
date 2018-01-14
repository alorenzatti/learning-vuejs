<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <!-- Exercise 1 -->
                  <!-- Create a Signup Form where you retrieve the following Information -->
                  <!-- Full Name (First Name + Last Name) -->
                  <!-- Mail -->
                  <!-- Password -->
                  <!-- Store Data? Yes/No -->
                  <form>
                    <label>First name:
                      <input type="text" name="firstName" v-model.lazy="firstName" />
                    </label>
                    <label>Last name:
                      <input type="text" name="lastName" v-model.lazy="lastName" />
                    </label>
                    <label>Mail:
                      <input type="text" name="mail" v-model.lazy="mail" />
                    </label>
                    <label>Password:
                      <input type="password" name="password" v-model.lazy="password" />
                    </label>
                    <label for="yes">
                      Store data? 
                      <input 
                      type="radio" 
                      id="yes" 
                      value="Yes" 
                      v-model="storeInfo"> Yes
                    </label>
                    <label for="no"> 
                      <input 
                      type="radio" 
                      id="no" 
                      value="No" 
                      v-model="storeInfo"> No
                    </label>
                    <button 
                      class="btn btn-primary"
                      @click.prevent="submit()">Submit!
                    </button> 
                  </form>
                    

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }} </p>
                        <p>Mail: {{ mail }} </p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ storeInfo }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data : function() {
        return {
          firstName : '',
          lastName : '',
          mail : '',
          password : '',
          storeInfo : 'No',
          isSubmitted : false
        }
      },

      computed : {

        fullName : function() {

          return this.firstName + " " + this.lastName
        }
      },

      methods : {

        submit : function() {
          this.isSubmitted = true
        }
      }
    }
</script>

<style>
</style>
