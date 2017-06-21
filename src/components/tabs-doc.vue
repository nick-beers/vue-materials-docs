<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-tabs>
            <m-tab :target="'#tab' + n" v-for="n in 5">Tab {{ n }}</m-tab>
        </m-tabs>
        <markup html='
        <m-tabs>
            <m-tab target="#tab1">Tab 1</m-tab>
            <m-tab target="#tab2">Tab 2</m-tab>
            <m-tab target="#tab3">Tab 3</m-tab>
        </m-tabs>'
        ></markup>
        <m-tabs>
            <m-tab :target="'#tab' + n" v-for="n in 10">Tab {{ n }}</m-tab>
        </m-tabs>
        <props :props="tabs_props"></props>
        <markup html='
        <m-tab>Tab</m-tab>'
        ></markup>
        <props :props="tab_props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tabs_props: [
                    ['selected', 'String ( Empty )'],
                    ['tabsFixedWidth', 'boolean ( false )'],
                    ['swipeable', 'boolean ( false )'],
                    ['responsiveThreshold', 'Number ( Infinity )'],
                    ['onShow', 'Function ( callback(tabReturnValue){  } )'],
                ],
                tab_props: [
                    ['active', 'boolean'],
                    ['target', 'string']
                ]
            }
        }
    }
</script>