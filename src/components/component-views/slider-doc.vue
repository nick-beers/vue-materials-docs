<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-slider>
            <m-slide src="http://lorempixel.com/580/250/nature/1">v-slide 1</m-slide>
            <m-slide src="http://lorempixel.com/580/250/nature/2">v-slide 2</m-slide>
            <m-slide src="http://lorempixel.com/580/250/nature/3">v-slide 3</m-slide>
        </m-slider>
        <markup html='
        <m-slider>
            <m-slide src="http://lorempixel.com/580/250/nature/1">v-slide 1</m-slide>
            <m-slide src="http://lorempixel.com/580/250/nature/2">v-slide 2</m-slide>
            <m-slide src="http://lorempixel.com/580/250/nature/3">v-slide 3</m-slide>
        </m-slider>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['full-width', 'boolean'],
                    ['indicators', 'boolean'],
                    ['height', 'number'],
                    ['transition', 'number'],
                    ['interval', 'number']
                    ['full-width', 'boolean'],
                ]
            }
        }
    }
</script>