<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-card panel class="center">
            <m-row>
                <m-grid s12 m4 l4>
                    <m-radio with-gap name="type" id="collapsible" v-model="type" val="collapsible">Collapsible</m-radio>
                </m-grid>
                <m-grid s12 m4 l4>
                    <m-radio with-gap name="type" id="expandable" v-model="type" val="expandable">Expandable</m-radio>
                </m-grid>
                <m-grid s12 m4 l4>
                    <m-checkbox name="popout" id="popout" v-model="popout">Popout</m-checkbox>
                </m-grid>
            </m-row>
        </m-card>
        <m-collapsible :collapse="collapsible" 
                     :expand="expandable"
                     :popout="popout"
                     ref="collapse"
        >
            <li>
                <m-collapsible-header>
                    <m-icon>filter_drama</m-icon> First
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
            <li>
                <m-collapsible-header>
                    <m-icon>place</m-icon> Second
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
            <li>
                <m-collapsible-header>
                    <m-icon>whatshot</m-icon> Third
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
        </m-collapsible>
        <markup html='
        <m-collapsible>
            <li>
                <m-collapsible-header>
                    <m-icon>filter_drama</m-icon> First
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
            <li>
                <m-collapsible-header>
                    <m-icon>place</m-icon> Second
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
            <li>
                <m-collapsible-header>
                    <m-icon>whatshot</m-icon> Third
                </m-collapsible-header>
                <m-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </m-collapsible-body>
            </li>
        </m-collapsible>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        watch: {
            type (v) {
                if (v === 'collapsible') {
                    this.collapsible = true
                    this.expandable = false
                } else {
                    this.collapsible = false
                    this.expandable = true
                }

                this.$nextTick(() => this.$refs.collapse.init())
            }
        },

        data () {
            return {
                collapsible: false,
                expandable: false,
                popout: false,
                type: 'collapsible',
                props: [
                    ['collapse', 'boolean'],
                    ['expand', 'boolean'],
                    ['popout', 'boolean']
                ]
            }
        }
    }
</script>