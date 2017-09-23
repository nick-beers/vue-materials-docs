<template>
    <div class="col s12">
        <h4>Examples</h4>
        <label for="timepicker">Time</label>
        <m-time-picker id="timepicker"></m-time-picker>
        <markup html='
        <label for="timepicker">Time</label>
        <m-time-picker id="timepicker"></m-time-picker>'
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
                    ['options.default', 'String ( "now" )'],
                    ['options.fromnow', 'Number ( 0 )'],
                    ['options.twelvehour', 'Boolean ( true )'],
                    ['options.donetext', 'String ( "OK" )'],
                    ['options.cleartext', 'String ( "Clear" )'],
                    ['options.canceltext', 'String ( "Cancel" )'],
                    ['options.autoclose', 'Boolean ( false )'],
                    ['options.ampmclickable', 'Boolean ( true )'],
                    ['options.aftershow', 'Function() {}'],
                ]
            }
        }
    }
</script>