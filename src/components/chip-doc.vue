<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-chip>Notice</m-chip>
        <markup html='
        <m-chip>Notice</m-chip>'
        ></markup>
        <m-chip class="blue white-text"
              close
        >
            Closable
        </m-chip>
        <markup html='
        <m-chip class="blue white-text"
              close
        >
            Closable
        </m-chip>'
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
                    ['close', 'boolean']
                ]
            }
        }
    }
</script>