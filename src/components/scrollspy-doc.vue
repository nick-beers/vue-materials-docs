<template>
    <m-row>
        <m-grid s12 m9 l10>
            <div id="examples" class="section scrollspy">
                <h4>Examples</h4>
                <markup html='
                <m-scrollspy :linkList="scrollSpyLinks"></m-scrollspy>'
                ></markup>
            </div>
            <div id="props" class="section scrollspy">
                <props :props="props"></props>
            </div>
        </m-grid>
        <m-grid class="hide-on-small-only" m3 l2>
            <div v-m-pushpin="pushpinOptions">
                <m-scrollspy :linkList="scrollSpyLinks"></m-scrollspy>
            </div>
        </m-grid>
    </m-row>
</template>

<script>
    export default {

        data () {
            return {
                props: [
                    ['linkList', 'Array[ { id: String, text: String } ]'],
                    ['scrollSpyTarget', 'String ( .scrollspy )'],
                    ['offset', 'String ( 200px )'],
                ],
                scrollSpyLinks: [
                    { id: "examples", text: "Examples" },
                    { id: "props", text: "Props" },
                ],
                pushpinOptions: {
                    top: 120
                },
            }
        },
    }
</script>