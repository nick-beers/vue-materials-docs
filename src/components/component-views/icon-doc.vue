<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-icon tiny>grade</m-icon>
        <markup html='
        <m-icon tiny>grade</m-icon>'
        ></markup>
        <m-icon>flight_land</m-icon>
        <markup html='
        <m-icon>flight_land</m-icon>'
        ></markup>
        <m-icon medium>list</m-icon>
        <markup html='
        <m-icon medium>list</m-icon>'
        ></markup>
        <m-icon large>bug_report</m-icon>
        <markup html='
        <m-icon large>bug_report</m-icon>'
        ></markup>
        <h4>Icon Prefixs</h4>
        <div class="input-field">
            <m-icon prefix>account_circle</m-icon>
            <m-text-input name="name"></m-text-input>
            <label for="name">Name</label>
        </div>
        <markup html='
        <div class="input-field">
            <m-icon prefix>account_circle</m-icon>
            <text-input name="name"></text-input>
            <label for="name">Name</label>
        </div>'
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
                    ['tiny', 'boolean'],
                    ['small', 'boolean'],
                    ['medium', 'boolean'],
                    ['large', 'boolean'],
                    ['prefix', 'boolean'],
                    ['right', 'boolean'],
                    ['left', 'boolean']
                ]
            }
        }
    }
</script>
