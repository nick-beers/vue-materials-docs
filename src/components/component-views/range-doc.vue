<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-range></m-range>
        <markup html='
        <m-range></m-range>'
        ></markup>
        <h4>Model</h4>
        <m-range v-model="range"></m-range>
        <h5 class="center">{{ range }}</h5>
        <markup html='
        <m-range v-model="range"></m-range>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                range: 15,
                props: [
                    ['min', 'string, number'],
                    ['max', 'string, number'],
                    ['v-model', 'string, number']
                ]
            }
        }
    }
</script>