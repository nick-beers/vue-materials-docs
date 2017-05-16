<template>
    <div class="col s12">
        <h4>Small</h4>
        <m-row>
            <m-grid s4><m-progress-circular small active></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular small active></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular small active></m-progress-circular></m-grid>
        </m-row>
        <markup html='
        <m-progress-circular small active></m-progress-circular>'
        ></markup>
        <h4>Large</h4>
        <m-row>
            <m-grid s4><m-progress-circular active large></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular active large></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular active large></m-progress-circular></m-grid>
        </m-row>
        <markup html='
        <m-progress-circular active large></m-progress-circular>'
        ></markup>
        <h4>Flashing</h4>
        <m-row>
            <m-grid s4><m-progress-circular active red-flash></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular active green-flash></m-progress-circular></m-grid>
            <m-grid s4><m-progress-circular active blue-flash></m-progress-circular></m-grid>
        </m-row>
        <markup html='
        <m-progress-circular active red red-flash></m-progress-circular>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['active', 'boolean'],
                    ['small', 'boolean'],
                    ['large', 'boolean'],
                    ['blue', 'boolean'],
                    ['blue-flash', 'boolean'],
                    ['green', 'boolean'],
                    ['green-flash', 'boolean'],
                    ['red', 'boolean'],
                    ['red-flash', 'boolean'],
                    ['yellow', 'boolean'],
                    ['yellow-flash', 'boolean']
                ]
            }
        }
    }
</script>