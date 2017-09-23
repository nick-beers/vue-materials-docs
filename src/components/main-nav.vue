<template>
<div>
    <m-nav nav-class="top-nav bladeblue">
        <div class="container">
            <a class="page-title">{{ currentRouteName | capitalize }}</a>
        </div>
    </m-nav>
    <div class="container">
        <a href="#!" class="left button-collapse top-nav full" v-m-side-nav:side-nav ref="nav">
            <m-icon>menu</m-icon>
        </a>
    </div>
    <m-side-nav slot="side-nav" id="side-nav" fixed>
        <template v-for="topRoute in routes">
            <li v-if="!topRoute.children" :class="{ 'active bladeblue white-text': topRoute.name == currentRouteName }" :key="topRoute.name">
                <router-link :to="{ path: topRoute.path }">
                    {{ topRoute.name | capitalize }}
                </router-link>
            </li>
            <li class="no-padding" v-else :key="topRoute.name">
                <m-collapsible collapse>
                    <li>
                        <m-collapsible-header class="black-text waves-effect waves-teal" ref="collapse">
                            {{ topRoute.name | capitalize }}
                        </m-collapsible-header>
                        <m-collapsible-body>
                            <ul>
                                <router-link tag="li" v-for="childRoute in topRoute.children" 
                                    :class="{ 'active bladeblue': currentRouteName == childRoute.name }" 
                                    :key="childRoute.name" 
                                    :to="childRoute.path">
                                        <a>{{ childRoute.name | capitalize }}</a>
                                </router-link>
                            </ul>
                        </m-collapsible-body>
                    </li>
                </m-collapsible>
            </li>
        </template>
    </m-side-nav>
</div>
</template>

<script>
    export default {
        props: [ 'pageTitle' ],
        computed: {
            currentRoute(){
                return this.$route.name
            },
            routes(){
                return this.$router.options.routes.slice(0, this.$router.options.routes.length-1)
            },
            currentRouteName() {
                return this.$route.name
            }
        },
        methods: {
            capitalizeFirst(word){
                return this.$options.filters.capitalize(word);
            }
        },
        filters: {
            capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }
    }
</script>

<style>
    nav.top-nav a.page-title {
        line-height: 122px;
        font-size: 48px;
    }
    nav.top-nav {
        height: 122px;
        box-shadow: none;
    }

    .side-nav li.active > a {
        color: inherit
    }

    @media only screen and (max-width: 992px){
        nav .nav-wrapper {
            text-align: center;
        }
        nav .nav-wrapper a.page-title {
            font-size: 36px;
        }
    }
   
    
    a.button-collapse.top-nav {
        position: absolute;
        text-align: center;
        height: 48px;
        width: 48px;
        left: 7.5%;
        top: 0;
        float: none;
        margin-left: 1.5rem;
        color: #fff;
        font-size: 36px;
        z-index: 2;
    }

    a.button-collapse.top-nav.full {
        line-height: 122px;
    }

    a.button-collapse.top-nav i {
        font-size: 32px;
    }
</style>