import Vue from 'vue'
import VueRouter from 'vue-router'

import Install from '@src/components/install-doc.vue'
import Directives from '@src/components/directives-doc.vue'
import Functional from '@src/components/functional-doc.vue'
import Dialog from '@src/components/dialog-doc.vue'
import Component from '@src/components/component-doc.vue'

// Components
import Badge from '@src/components/component-views/badge-doc.vue'
import Breadcrumbs from '@src/components/component-views/breadcrumbs-doc.vue'
import Button from '@src/components/component-views/button-doc.vue'
import Card from '@src/components/component-views/card-doc.vue'
import Carousel from '@src/components/component-views/carousel-doc.vue'
import Chip from '@src/components/component-views/chip-doc.vue'
import Collapsible from '@src/components/component-views/collapsible-doc.vue'
import Collection from '@src/components/component-views/collection-doc.vue'

const routes = [
    { path: '/install', name: 'install', component: Install },
    { path: '/directives', name: 'directives', component: Directives },
    { path: '/functional', name: 'functional', component: Functional },
    { path: '/dialog', name: 'dialog', component: Dialog },
    { path: '/components', name: 'components', component: Component, children: [
            { path: '/components/badge', name: 'badge', component: Badge },
            { path: '/components/breadcrumbs', name: 'breadcrumbs', component: Breadcrumbs },
            { path: '/components/button', name: 'button', component: Button },
            { path: '/components/card', name: 'card', component: Card },
            { path: '/components/carousel', name: 'carousel', component: Carousel },
            { path: '/components/chip', name: 'chip', component: Chip },
            { path: '/components/collapsible', name: 'collapsible', component: Collapsible },
            { path: '/components/collection', name: 'collection', component: Collection },
        ] 
    },
    { path: '*', redirect: '/install' }
]

Vue.use(VueRouter)
export default new VueRouter({
    routes
})