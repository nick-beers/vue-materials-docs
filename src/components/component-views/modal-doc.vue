<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-btn-link v-m-modal:modal>Modal</m-btn-link>
        <m-modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>
        <markup html='
        <m-btn-link v-m-modal:modal>Modal</m-btn-link>
        <m-modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>'
        ></markup>
        <m-btn-link v-m-modal:modal1>Modal With fixed Footer</m-btn-link>
        <m-modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>
        <markup html='
        <m-btn-link v-m-modal:modal1>Modal With fixed Footer</m-btn-link>
        <m-modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>'
        ></markup>
        <m-btn-link v-m-modal:modal2>Modal Bottom Style Sheet</m-btn-link>
        <m-modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>
        <markup html='
        <m-btn-link v-m-modal:modal2>Modal Bottom Style Sheet</m-btn-link>
        <m-modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>'
        ></markup>
        <m-btn v-m-modal:modal3>Modal with button trigger</m-btn>
        <m-modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>
        <markup html='
        <m-btn v-m-modal:modal3>Modal with button trigger</m-btn>
        <m-modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
            </div>
        </m-modal>'
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
                    ['bottom-sheet', 'boolean'],
                    ['fixed-footer', 'boolean'],
                    ['params', 'object'],
                    ['id', 'string']
                ]
            }
        }
    }
</script>