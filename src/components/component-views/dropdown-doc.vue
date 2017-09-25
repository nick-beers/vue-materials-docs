<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-btn v-m-dropdown:dropdown>dropdown</m-btn>
        <m-dropdown id="dropdown">
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
        </m-dropdown>
        <markup html='
        <m-btn v-m-dropdown:dropdown>dropdown</m-btn>
        <m-dropdown id="dropdown">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </m-dropdown>'
        ></markup>
        <h4>Hover</h4>
        <m-btn v-m-dropdown:dropdown2 class="red" hover>dropdown</m-btn>
        <m-dropdown id="dropdown2">
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me!</a>
            </li>
        </m-dropdown>
        <markup html='
        <m-btn v-m-dropdown:dropdown2 class="red" hover>dropdown</m-btn>
        <m-dropdown id="dropdown2">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </m-dropdown>'
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
                    ['induration', 'number'],
                    ['outduration', 'number'],
                    ['constrainwidth', 'boolean'],
                    ['hover', 'boolean'],
                    ['gutter', 'number'],
                    ['beloworigin', 'boolean'],
                    ['alignment', 'string']
                ]
            }
        }
    }
</script>