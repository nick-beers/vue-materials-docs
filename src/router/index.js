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
import Dropdown from '@src/components/component-views/dropdown-doc.vue'
import Footer from '@src/components/component-views/footer-doc.vue'
import Forms from '@src/components/component-views/forms-doc.vue'
import DateInput from '@src/components/component-views/date-input-doc.vue'
import TimeInput from '@src/components/component-views/time-input-doc.vue'
import Icon from '@src/components/component-views/icon-doc.vue'
import MaterialBox from '@src/components/component-views/material-box-doc.vue'
import Modal from '@src/components/component-views/modal-doc.vue'
import Nav from '@src/components/component-views/nav-doc.vue'
import Pagination from '@src/components/component-views/pagination-doc.vue'
import Parallax from '@src/components/component-views/parallax-doc.vue'
import ProgressCircular from '@src/components/component-views/progress-circular-doc.vue'
import ProgressLinear from '@src/components/component-views/progress-linear-doc.vue'
import Range from '@src/components/component-views/range-doc.vue'
import SideNav from '@src/components/component-views/side-nav-doc.vue'
import Slider from '@src/components/component-views/slider-doc.vue'
import Tabs from '@src/components/component-views/tabs-doc.vue'
import Table from '@src/components/component-views/table-doc.vue'
import Scrollspy from '@src/components/component-views/scrollspy-doc.vue'
import FeatureDiscovery from '@src/components/component-views/feature-discovery-doc.vue'

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
            { path: '/components/dropdown', name: 'dropdown', component: Dropdown },
            { path: '/components/feature-discovery', name: 'feature-discovery', component: FeatureDiscovery },
            { path: '/components/footer', name: 'footer', component: Footer },
            { path: '/components/forms', name: 'forms', component: Forms },
            { path: '/components/date-input', name: 'date-input', component: DateInput },
            { path: '/components/time-input', name: 'time-input', component: TimeInput },
            { path: '/components/icon', name: 'icon', component: Icon },
            { path: '/components/material-box', name: 'material-box', component: MaterialBox },
            { path: '/components/modal', name: 'modal', component: Modal },
            { path: '/components/nav', name: 'nav', component: Nav },
            { path: '/components/pagination', name: 'pagination', component: Pagination },
            { path: '/components/parallax', name: 'parallax', component: Parallax },
            { path: '/components/progress-circular', name: 'progress-circular', component: ProgressCircular },
            { path: '/components/progress-linear', name: 'progress-linear', component: ProgressLinear },
            { path: '/components/range', name: 'range', component: Range },
            { path: '/components/scrollspy', name: 'scrollspy', component: Scrollspy },
            { path: '/components/side-nav', name: 'side-nav', component: SideNav },
            { path: '/components/slider', name: 'slider', component: Slider },
            { path: '/components/table', name: 'table', component: Table },
            { path: '/components/tabs', name: 'tabs', component: Tabs },
        ] 
    },
    { path: '*', redirect: '/install' }
]

Vue.use(VueRouter)
export default new VueRouter({
    routes
})