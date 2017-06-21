<template>
    <div class="col s12">
        <h4>Dropdowns</h4>
        <markup html='
        v-m-dropdown:id'
        ></markup>
        <p>
            Create a <strong>&lt;m-dropdown&gt;</strong> element with an id. Activate it by applying v-m-dropdown to any element.
        </p>
        <h4>Modals</h4>
        <markup html='
        v-m-modal:id="params"'
        ></markup>
        <p>
            Create a <strong>&lt;m-modal&gt;</strong> element with an id. Activate it by applying v-m-modal to any element. Pass modal parameters through the expression.
        </p>
        <h4>Side-Navs</h4>
        <markup html='
        v-m-side-nav:id'
        ></markup>
        <p>
            Create a <strong>&lt;m-side-nav&gt;</strong> element with an id. Activate it by applying v-m-side-nav to any element.
        </p>
        <h4>Tooltips</h4>
        <m-row>
            <m-grid s12 m6 l3>
                <m-btn class="deep-purple" v-m-tooltip:top="'Tooltip Top'">Top</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="deep-purple" v-m-tooltip:right="'Tooltip Right'">Right</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="deep-purple" v-m-tooltip:bottom="'Tooltip Bottom'">Bottom</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="deep-purple" v-m-tooltip:left="'Tooltip Left'">Left</m-btn>
            </m-grid>
        </m-row>
        <markup html='
        v-m-tooltip:position="&apos;Content&apos;"'
        ></markup>

        <h4>Feature Discovery</h4>
        <markup html='
        v-m-tap-target:id="params"'
        ></markup>
        <p>
            Create a <strong>&lt;m-tap-target&gt;</strong> element with an id. Activate it by applying v-m-tap-target to any element. The params object is expected to be the string 'open' or 'close', but if not provided will default to 'open'.
        </p>
        
        <h4>Pushpin</h4>
        <markup html='
        v-m-pushpin="params"'
        ></markup>
        <p>
            Register the pushpin function to any element by applying v-m-pushpin. The params object will be passed directly to the pushpin initializer.
        </p>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                ttop: 'Tooltip Top'
            }
        }
    }
</script>

<style>
    .btn {
        margin-bottom: 1rem;
    }
</style>