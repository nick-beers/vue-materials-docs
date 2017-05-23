<template>
<div>
    <m-nav nav-class="top-nav deep-purple lighten-3">
        <div class="container">
            <a class="page-title">{{ title }}</a>
        </div>
    </m-nav>
    <div class="container">
        <a href="#!" class="left button-collapse top-nav full" v-m-side-nav:side-nav ref="nav">
            <m-icon>menu</m-icon>
        </a>
    </div>
    <m-side-nav slot="side-nav"
                id="side-nav"
                fixed
    >
        <template v-for="(value, key) in items">
            <li v-if="typeof value === 'string'"
                :class="{ 'active': value === title }"
            >
                <a :href="value" 
                   v-text="value"
                   @click.prevent="select(value)"
                ></a>
            </li>
            <li class="no-padding" v-else>
                <m-collapsible collapse >
                    <li>
                        <m-collapsible-header class="black-text waves-effect waves-teal"
                                            ref="collapse"
                        >
                            {{ key }}
                        </m-collapsible-header>
                        <m-collapsible-body>
                            <ul>
                                <li v-for="item in value"
                                    :class="{ 'active deep-purple lighten-3': title === item }"
                                >
                                    <a :href="item" 
                                       @click.prevent="select(item)"
                                    >{{ item }}</a>
                                </li>
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
        data () {
            return {
                items: {
                    install: 'Install',
                    directives: 'Directives',
                    functional: 'Functional',
                    dialog: 'Dialog',
                    Components: ['Badge', 'Breadcrumbs', 'Button', 'Card', 'Carousel', 'Chip', 'Collapsible', 'Collection', 'Dropdown', 'Footer', 'Forms', 'Icon', 'Material-Box', 'Modal', 'Nav', 'Pagination', 'Parallax', 'Progress-Circular', 'Progress-Linear', 'Range', 'Side-Nav', 'Slider', 'Tabs', 'Table']
                },
                icon: 'keyboard_arrow_down',
                nav: {
                    closeOnClick: false
                }
            }
        },

        props: ['title'],

        mounted () {
            this.nav_close()
        },

        methods: {
            select (item) {
                this.$emit('select', item)
            },

            nav_close () {
                this.nav.closeOnClick = window.innerWidth < 993
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