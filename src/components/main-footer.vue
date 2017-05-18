<template>
    <m-footer class="deep-purple lighten-3">
        <div class="container" slot="content">
            <div class="row center">
                <div class="col s6">
                    <m-btn-link class="deep-purple lighten-4" 
                              large
                              href="https://github.com/johnleider/vue-materials"
                              target="_blank"
                    >
                        Github
                    </m-btn-link>
                </div>
                <div class="col s6">
                    <m-btn-link class="deep-purple lighten-4"
                              large
                              href="https://www.npmjs.com/package/vue-materials"
                              target="_blank"
                    >
                        NPM
                    </m-btn-link>
                </div>
            </div>
        </div>
        <div class="container" slot="copyright">©Copyright 2016 John Leider</div>
    </m-footer>
</template>