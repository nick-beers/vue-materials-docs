import Vue from 'vue'
import MVueComponents from '@edge_blade/vue-materials'
import Resource from 'vue-resource'
import Components from './components/_index'
import App from './app.vue'

Vue.use(Resource)
Vue.use(MVueComponents)

Vue.http.options.root = 'src/vendor/@edge_blade/vue-materials/src/components'

for (let key in Components) {
    Vue.component(key, Components[key])
}

new Vue({
  el: '#app',
  render: h => h(App)
})
