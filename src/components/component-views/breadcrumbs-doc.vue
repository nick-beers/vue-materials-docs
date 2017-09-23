<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-breadcrumbs :items="items"></m-breadcrumbs>
        <markup html='
        <m-breadcrumbs :items="items"></m-breadcrumbs>'
        ></markup>
        <h4>Slot</h4>
        <m-breadcrumbs>
            <a v-for="item in items"
               :href="item.href"
               class="breadcrumb"
            >
                {{ item.text }}
            </a>
        </m-breadcrumbs>
        <markup html='
        <m-breadcrumbs>
            <a v-for="item in items"
               :href="item.href"
               class="breadcrumb"
               m-text="item.text">
            </a>
        </m-breadcrumbs>'
        ></markup>
        <h4>Array</h4>
        <markup html="
        {
            items: [
                {
                    text: 'First',
                    href: '#!'
                },
                {
                    text: 'Second',
                    href: '#!'
                },
                {
                    text: 'Third',
                    href: '#!'
                }
            ]
        }"
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
                    ['items', 'array']
                ],
                items: [
                    {
                        text: 'First',
                        href: '#!'
                    },
                    {
                        text: 'Second',
                        href: '#!'
                    },
                    {
                        text: 'Third',
                        href: '#!'
                    }
                ]
            }
        }
    }
</script>