<template>
    <div class="col s12">
        <h4>In Collections</h4>
        <m-collection>
            <m-collection-item>
                Alan
                <m-badge new slot="secondary"></m-badge>
            </m-collection-item>
            <m-collection-item>
                Alan
                <m-badge new class="blue" slot="secondary"></m-badge>
            </m-collection-item>
            <m-collection-item>
                Alan
                <m-badge new class="red" slot="secondary"></m-badge>
            </m-collection-item>
            <m-collection-item>
                Alan
                <m-badge new class="purple" slot="secondary"></m-badge>
            </m-collection-item>
        </m-collection>
        <markup html='
        <m-collection-item>
            Alan
            <m-badge new slot="secondary"></badge>
        </m-collection-item>'
        ></markup>
        <h4>In Dropdowns</h4>
        <m-btn v-m-dropdown:dropdown>Dropdown</m-btn>
        <m-dropdown id="dropdown">
            <li>
                <a href="#">Click me <m-badge new></m-badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </m-dropdown>
        <markup html='
        <m-btn v-m-dropdown:m-dropdown>Dropdown</btn>
        <m-dropdown id="dropdown">
            <li>
                <a href="#">Click me <m-badge new></m-badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </m-dropdown>'
        ></markup>
        <h4>In Navbars</h4>
        <m-nav>
            <a href="#!" slot="logo" class="brand-logo hide-on-med-and-down">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!">sass <m-badge new></m-badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </m-nav>
        <markup html='
        <m-nav>
            <a href="#!" slot="logo" class="brand-logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!">sass <m-badge new></m-badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </m-nav>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['new', 'boolean']
                ]
            }
        }
    }
</script>
