<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Directives Exercise </h1>
                <button v-callback:click="clicked"> Click me! </button>
                <hr>
                <div style="width: 100px; height: 100px; background-color: lightgreen"
                  v-callback:mouseenter="mouseEntered"
                  v-callback:mouseleave="mouseLeft">
                </div>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives : {
        'callback' : {
          bind : function(el, binding, vnode) {
            // el.onclick = function() {
            //   binding.value()
            // }
            var type = binding.arg
            var fn = binding.value
            el.addEventListener(type, fn)
          }
        }
      },

      methods : {
        clicked : function() {
          console.log('TESTED!')
        },

        mouseEntered : function() {

          console.log("Mouse entered!")
        },

        mouseLeft : function() {

          console.log("Mouse left!")
        }
      }
    }
</script>

<style>
</style>
