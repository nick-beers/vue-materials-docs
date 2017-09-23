<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-card panel>
            <div class="row">
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="large" id="large" name="large">Large</m-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="disabled" id="disabled" name="disabled">Disabled</m-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="icon" id="m-icon" name="m-icon">icon</m-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="waves" id="waves" name="waves">Waves</m-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="flat" id="flat" name="flat">Flat</m-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <m-checkbox v-model="floating" id="floating" name="floating">Floating</m-checkbox>
                </div>
            </div>
            <div class="center">
                <m-btn :large="large"
                     :disabled="disabled"
                     :waves-light="waves"
                     :flat="flat"
                     :floating="floating"
                ><span v-if="!floating">Button</span> <m-icon v-if="icon || floating" right>list</m-icon></m-btn>
            </div>
        </m-card>
        <markup html="
        <m-btn>Button</m-btn>"></markup>
        <markup html='
        <m-btn-link href="#!">Button</m-btn-link>'></markup>
        <props :props="button_props"></props>
        <waves :waves="button_waves"></waves>
        <h4>Fixed Action Button</h4>
        <m-fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <m-btn-link floating class="red"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="yellow darken-1"><m-icon>format_quote</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="green"><m-icon>publish</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="blue"><m-icon>attach_file</m-icon></m-btn-link>
                </li>
            </ul>
        </m-fab>
        <markup html='
        <m-fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <m-btn-link floating class="red"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="yellow darken-1"><m-icon>format_quote</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="green"><m-icon>publish</m-icon></m-btn-link>
                </li>
                <li>
                    <m-btn-link floating class="blue"><m-icon>attach_file</m-icon></m-btn-link>
                </li>
            </ul>
        </m-fab>'
        ></markup>
        <props :props="fab_props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                large: false,
                disabled: false,
                icon: false,
                waves: false,
                flat: false,
                floating: false,
                button_props: [
                    ['disabled', 'boolean'],
                    ['flat', 'boolean'],
                    ['modal', 'boolean'],
                    ['floating', 'boolean'],
                    ['large', 'boolean'],
                    ['type (<btn> only)', 'string']
                ],
                fab_props: [
                    ['horizontal', 'boolean'],
                    ['clickable', 'boolean']
                ],
                button_waves: [
                    ['wavesCircle', 'boolean'],
                    ['wavesLight', 'boolean'],
                    ['wavesOrange', 'boolean'],
                    ['wavesPurple', 'boolean'],
                    ['wavesGreen', 'boolean'],
                    ['wavesTeal', 'boolean'],
                    ['wavesRed', 'boolean'],
                    ['wavesYellow', 'boolean'],
                ]
            }
        }
    }
</script>

<style scoped>
    .m-btn {
        margin-bottom: 1rem;
    }
</style>