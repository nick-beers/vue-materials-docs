import Vue from 'vue'
import MVueComponents from '@edge_blade/vue-materials'
import Resource from 'vue-resource'
import App from './app.vue'

Vue.use(Resource)
Vue.use(MVueComponents)

Vue.http.options.root = 'src/vendor/@edge_blade/vue-materials/src/components'

// materialize
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import 'materialize-css/dist/fonts/roboto/Roboto-Regular.woff2'
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff2'
import 'materialize-css/dist/fonts/roboto/Roboto-Light.woff2'

import router from './router'

router.afterEach((to, from) => {
  window.scrollTo(0,0)
})

// globals
import markup from '@src/components/markup.vue'
import props from '@src/components/props.vue'
import waves from '@src/components/waves.vue'

Vue.component('markup', markup)
Vue.component('props', props)
Vue.component('waves', waves)

new Vue({
  el: '#app',
  router,
  methods: {
    currUrl(urlPart){
      return `${window.location.origin}/#${urlPart}`;
    }
  },
  render: h => h(App)
})
