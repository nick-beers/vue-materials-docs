<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-card panel class="center">
            <m-row>
                <m-grid s4>
                    <m-checkbox name="small" id="small" v-model="small">Small</m-checkbox>
                </m-grid>
                <m-grid s4>
                    <m-checkbox name="medium" id="medium" v-model="medium">Medium</m-checkbox>
                </m-grid>
                <m-grid s4>
                    <m-checkbox name="large" id="large" v-model="large">Large</m-checkbox>
                </m-grid>
            </m-row>
        </m-card>
        <m-card :small="small"
              :medium="medium"
              :large="large"
        >
            <div class="card-image">
                <img src="http://materializecss.com/images/sample-1.jpg">
                <span class="card-title">card Title</span>
            </div>
            <div class="card-content">
                <p>I am a very simple m-card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </m-card>
        <markup html='
        <m-card>
            <div class="card-image">
                <img src="http://materializecss.com/images/sample-1.jpg">
                <span class="card-title">card Title</span>
            </div>
            <div class="card-content">
                <p>I am a very simple m-card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </m-card>'
        ></markup>
        <m-card class="blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">m-card Title</span>
                <p>
                    I am a very simple m-card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
        </m-card>
        <markup html='
        <m-card class="blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">m-card Title</span>
                <p>
                    I am a very simple m-card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
        </m-card>'
        ></markup>
        <m-card>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="http://materializecss.com/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">m-card Title<i class="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">m-card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </m-card>
        <markup html='
        <m-card>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="http://materializecss.com/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">m-card Title<i class="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">m-card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </m-card>'
        ></markup>
        <h4>Panels</h4>
        <m-card panel class="teal">
            <span class="white-text">
                I am a very simple m-card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </span>
        </m-card>
        <markup html='
        <m-card panel class="teal">
            <span class="white-text">
                I am a very simple m-card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </span>
        </m-card>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                small: false,
                medium: false,
                large: false,
                props: [
                    ['small', 'boolean'],
                    ['medium', 'boolean'],
                    ['large', 'boolean'],
                    ['panel', 'boolean'],
                ]
            }
        }
    }
</script>
