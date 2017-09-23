<template>
    <div id="app">
        <header>
            <main-nav></main-nav>
        </header>

        <main>
            <m-container>
                <m-row>
                    <router-view></router-view>
                </m-row>
            </m-container>
        </main>

        <main-footer></main-footer>
    </div>
</template>

<script>
    import MainNav from '@src/components/main-nav.vue'
    import MainFooter from '@src/components/main-footer.vue'
    

    export default {
        name: 'App',
        components: {
            MainNav,
            MainFooter
        },
    }
</script>

<style>
    body {
        overflow-x: hidden;
    }

    main {
        min-height: 83.1vh;
        padding-bottom: 3rem;
    }

    header, main, footer {
        padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }

    h4 {
        margin-top: 6rem;
    }

    .bladeblue {
        background-color: #007dc6 !important;
    }

    .bladegrey {
        background-color: #54565b !important;
    }
    
</style>
