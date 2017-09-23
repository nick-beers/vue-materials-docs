<template>
    <div class="col s12">
        <h4>Determinate</h4>
        <m-range v-model="range"></m-range>
        <m-progress-linear determinate 
                         v-model="width_l"
        ></m-progress-linear>
        <markup html='
        <m-progress-linear determinate 
                         width="50%"
        ></m-progress-linear>'
        ></markup>
        <h4>Indeterminate</h4>
        <m-progress-linear indeterminate></m-progress-linear>
        <markup html='
        <m-progress-linear indeterminate></m-progress-linear>'
        ></markup>
        <h4>Model</h4>
        <m-progress-linear determinate 
                         v-model="width"
        ></m-progress-linear>
        <markup html='
        <m-progress-linear determinate 
                         m-model="width"
        ></m-progress-linear>'
        ></markup>
        <markup html="
        export default {
            data () {
                return {
                    number: 10
                    interval: {}
                }
            },

            computed: {
                width () {
                    return this.number.toString() + '%'
                }
            },

            mounted () {
                clearInterval(this.interval)

                this.interval = setInterval(() => {
                    if (this.number > 100) {
                        this.number = 10
                        return
                    }

                    this.number += Math.random()
                }, 50)
            }
        }"
    ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                number: 10,
                props: [
                    ['determinate', 'boolean'],
                    ['indeterminate', 'boolean'],
                    ['v-model', 'string']
                ],
                interval: {},
                range: 20
            }
        },

        computed: {
            width () {
                return this.number.toString() + '%'
            },

            width_l () {
                return this.range.toString() + '%'
            }
        },

        mounted () {
            clearInterval(this.interval)

            this.interval = setInterval(() => {
                if (this.number > 100) {
                    this.number = 1
                    return
                }

                this.number += Math.random()
            }, 50)
        }
    }
</script>