<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-btn-link v-m-side-nav:demo="nav">Click Me</m-btn-link>
            <m-side-nav id="demo">
                <ul>
                    <li v-for="n in 5">
                        <a :href="$root.currUrl($route.path)">Link</a>
                    </li>
                </ul>
            </m-side-nav>
        <markup html='
        <m-btn-link v-m-side-nav:demo="nav">Click Me</m-btn-link>
        <m-side-nav id="demo">
            <ul>
                <li v-for="n in 5">
                    <a href="#!">Link</a>
                </li>
            </ul>
        </m-side-nav>'
        ></markup>
        <markup html="
        export default {
            data () {
                return {
                    nav: {
                        edge: 'right'
                    }
                }
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
                nav: {
                    edge: 'right'
                },
                
                props: [
                    ['fixed', 'boolean'],
                    ['id', 'string']
                ]
            }
        }
    }
</script>