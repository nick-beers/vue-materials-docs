<template>
    <div class="col s12">
        <h4>Examples</h4>
        <label id="dateInput">Date</label>
        <m-date-input id="dateInput"></m-date-input>
        <markup html='
        <label id="dateInput">Date</label>
        <m-date-input id="dateInput"></m-date-input>'
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
                    ['value', 'String'],
                    ['format', 'String']
                ]
            }
        }
    }
</script>