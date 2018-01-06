<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue>
                  <h1 slot="header">Simple</h1>
                  <p slot="body">identified</p>
                  <h6 slot="footer">slots</h6>
                </app-blue>
                <app-green>
                  <h1 slot="title">A little more complex slots</h1>
                  <div slot="contents">
                    <p>Contents with more elements</p>
                    <label>to be shown</label>
                  </div>
                </app-green>
                <app-red>
                  <p>Default slot</p>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
