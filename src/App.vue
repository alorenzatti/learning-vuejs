<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <p>Animations</p>
              <hr>
              <button class="btn btn-primary" @click="show = !show">Show Alert</button>
              <br><br>
              <transition name="fade">
                <div class="alert alert-info" v-if="show">This is some info</div>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data : function() {
        return {
          show : false
        }
      }
    }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
  }
</style>
