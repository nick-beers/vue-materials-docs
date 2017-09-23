<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-material-box src="http://materializecss.com/images/sample-1.jpg"></m-material-box>
        <markup html='
        <m-material-box src="http://materializecss.com/images/sample-1.jpg"></m-material-box>'
        ></markup>
        <h4>Captions</h4>
        <m-material-box :width="250" 
                      src="http://lorempixel.com/800/400/nature/4"
                      caption="I'm a caption"
        ></m-material-box>
        <markup html='
        <m-material-box :width="250" 
                      src="http://lorempixel.com/800/400/nature/4"
                      caption="Caption"
        ></m-material-box>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['width', 'boolean, string, number'],
                    ['src', 'string'],
                    ['caption', 'string, boolean']
                ]
            }
        }
    }
</script>