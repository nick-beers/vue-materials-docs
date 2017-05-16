<template>
    <div class="col s12">
        <h4>Dropdowns</h4>
        <markup html='
        v-m-dropdown:id'
        ></markup>
        <p>
            Create a <strong>&lt;v-m-dropdown&gt;</strong> element with an id. Activate it by applying v-m-dropdown to any element.
        </p>
        <h4>Modals</h4>
        <markup html='
        v-m-modal:id="params"'
        ></markup>
        <p>
            Create a <strong>&lt;v-m-modal&gt;</strong> element with an id. Activate it by applying v-m-modal to any element. Pass modal parameters through the expression.
        </p>
        <h4>Side-Navs</h4>
        <markup html='
        v-m-side-nav:id'
        ></markup>
        <p>
            Create a <strong>&lt;v-m-side-nav&gt;</strong> element with an id. Activate it by applying v-m-side-nav to any element.
        </p>
        <h4>Tooltips</h4>
        <m-row>
            <m-grid s12 m6 l3>
                <m-btn class="red" v-m-tooltip:top="'Tooltip Top'">Top</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="red" v-m-tooltip:right="'Tooltip Right'">Right</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="red" v-m-tooltip:bottom="'Tooltip Bottom'">Bottom</m-btn>
            </m-grid>
            <m-grid s12 m6 l3>
                <m-btn class="red" v-m-tooltip:left="'Tooltip Left'">Left</m-btn>
            </m-grid>
        </m-row>
        <markup html='
        v-m-tooltip:position="&apos;Content&apos;"'
        ></markup>
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