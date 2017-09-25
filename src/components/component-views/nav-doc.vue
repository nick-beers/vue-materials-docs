<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-nav>
            <a :href="$root.currUrl($route.path)" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li v-for="n in 3">
                    <a :href="$root.currUrl($route.path)">Item</a>
                </li>
            </ul>
            <m-side-nav id="side" slot="side-nav"></m-side-nav>
        </m-nav>
        <markup html='
        <m-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul slot="items" class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <m-side-nav id="side" slot="side-nav"></m-side-nav>
        </m-nav>'
        ></markup>
        <h4>With Icons</h4>
        <m-nav nav-class="blue">
            <a :href="$root.currUrl($route.path)" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a :href="$root.currUrl($route.path)"><m-icon>done</m-icon></a>
                </li>
                <li>
                    <a :href="$root.currUrl($route.path)"><m-icon>list</m-icon></a>
                </li>
                <li>
                    <a :href="$root.currUrl($route.path)" v-m-dropdown:icon-drop><m-icon>more_vert</m-icon></a>
                </li>
            </ul>
            <m-side-nav id="side2" slot="side-nav"></m-side-nav>
        </m-nav>
        <m-dropdown id="icon-drop">
            <li>
                <a :href="$root.currUrl($route.path)">Click me</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me</a>
            </li>
            <li>
                <a :href="$root.currUrl($route.path)">Click me</a>
            </li>
        </m-dropdown>
        <markup html='
        <m-nav nav-class="blue">
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!"><m-icon>done</m-icon></a>
                </li>
                <li>
                    <a href="#!"><m-icon>list</m-icon></a>
                </li>
                <li>
                    <a href="#!" m-dropdown:m-icon-drop><m-icon>more_vert</m-icon></a>
                </li>
            </ul>
            <m-side-nav id="side2" slot="side-nav"></m-side-nav>
        </m-nav>
        <dropdown id="m-icon-drop">
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
        </dropdown>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {                
                props: [
                    ['fixed', 'boolean'],
                    ['nav-class', 'string'],
                ]
            }
        }
    }
</script>
