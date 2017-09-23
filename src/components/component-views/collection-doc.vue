<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-collection>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
        </m-collection>
        <markup html='
        <m-collection>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
        </m-collection>'
        ></markup>
        <m-collection>
            <m-collection-link>Alvin</m-collection-link>
            <m-collection-link active>Alvin</m-collection-link>
            <m-collection-link>Alvin</m-collection-link>
            <m-collection-link>Alvin</m-collection-link>
        </m-collection>
        <markup html='
        <m-collection>
            <m-collection-link>Alvin</m-collection-link>
            <m-collection-link active>Alvin</m-collection-link>
            <m-collection-link>Alvin</m-collection-link>
            <m-collection-link>Alvin</m-collection-link>
        </m-collection>'
        ></markup>
        <h4>With Header</h4>
        <m-collection with-header>
            <m-collection-item header>
                <h3>First Name</h3>
            </m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
        </m-collection>
        <markup html='
        <m-collection with-header>
            <m-collection-item header>
                <h3>First Name</h3>
            </m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
            <m-collection-item>Alvin</m-collection-item>
        </m-collection>'
        ></markup>
        <h4>Secondary Content</h4>
        <m-collection>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
        </m-collection>
        <markup html='
        <m-collection>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
            <m-collection-item>
                Alvin
                <span slot="secondary"><m-icon>send</m-icon></span>
            </m-collection-item>
        </m-collection>'
        ></markup>
        <h4>Avatar</h4>
        <m-collection>
            <m-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><m-icon>star</m-icon></span>
            </m-collection-avatar>
            <m-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><m-icon>star</m-icon></span>
            </m-collection-avatar>
        </m-collection>
        <markup html='
        <m-collection>
            <m-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><m-icon>star</m-icon></span>
            </m-collection-avatar>
            <m-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><m-icon>star</m-icon></span>
            </m-collection-avatar>
        </m-collection>'
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
                    ['with-header', 'boolean']
                ]
            }
        }
    }
</script>