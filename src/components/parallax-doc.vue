<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-parallax src="http://materializecss.com/images/parallax1.jpg"></m-parallax>
        <markup html='
        <m-parallax src="http://materializecss.com/images/parallax1.jpg"></m-parallax>'
        ></markup>
        <m-parallax src="http://materializecss.com/images/parallax1.jpg"
                  :height="250"
        ></m-parallax>
        <markup html='
        <m-parallax src="http://materializecss.com/images/parallax1.jpg"
                  :height="250"
        ></m-parallax>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['height', 'string, number'],
                    ['src', 'string']
                ]
            }
        }
    }
</script>