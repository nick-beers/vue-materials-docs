<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-pagination :length="10" 
                    v-model="selected"
        ></m-pagination>
        <markup html='
        <m-pagination :length="10" 
                    v-model="selected"
        ></m-pagination>'
        ></markup>
        <m-pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
                    @click="update"
        ></m-pagination>
        <markup html='
        <m-pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
        ></m-pagination>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        methods: {
            update (n) {
                this.active = n
            }
        },

        data () {
            return {
                active: 1,
                selected: 1,
                length: 15,
                props: [
                    ['length', 'string, number'],
                    ['v-model', 'string, number'],
                    ['color', 'string'],
                    ['waves', 'boolean']
                ]
            }
        }
    }
</script>