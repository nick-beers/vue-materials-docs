<template>
    <form>
        <h4 class="col s12">Examples</h4>

        <m-grid s6>
            <div class="input-field">
                <m-text-input name="first"
                            id="first"
                            placeholder="First Name"
                            v-model="test"
                ></m-text-input>
                <label for="first"
                       class="active"
                >First Name</label>
                {{ test }}
            </div>
        </m-grid>
        <m-grid s6>
            <div class="input-field">
                <m-text-input name="last"
                            id="last"
                ></m-text-input>
                <label for="last">Last Name</label>
            </div>
        </m-grid>
        <m-grid s12>
            <markup html='
            <div class="input-field">
                <m-text-input name="first"
                            id="first"
                            placeholder="First Name"
                ></m-text-input>
                <label for="first">First Name</label>
            </div>'
            ></markup>
        </m-grid>
        <m-grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <m-icon prefix>account_circle</m-icon>
                <m-text-input name="username"
                            id="username"
                ></m-text-input>
                <label for="username">Username</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-icon prefix>account_circle</m-icon>
                <m-text-input name="username"
                            id="username"
                ></m-text-input>
                <label for="username">Username</label>
            </div>'
            ></markup>
        </m-grid>
        <m-grid s12>
            <h4>Text Area</h4>
            <div class="input-field">
                <m-text-area name="ta"
                           id="ta"
                ></m-text-area>
                <label for="ta">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-text-area name="ta"
                           id="ta"
                ></m-text-area>
                <label for="ta">Text Area</label>
            </div>'
            ></markup>
        </m-grid>
        <m-grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <m-icon prefix>mode_edit</m-icon>
                <m-text-area name="ta2"
                           id="ta2"
                ></m-text-area>
                <label for="ta2">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-icon prefix>mode_edit</m-icon>
                <m-text-area name="ta2"
                           id="ta2"
                ></m-text-area>
                <label for="ta2">Text Area</label>
            </div>'
            ></markup>
            <props :props="[['length', 'string, number (works on input or m-text-area)']]"></props>
        </m-grid>
        <m-grid s12>
            <h4>Select</h4>
            <div class="input-field">
                <m-select name="select"
                          id="select"
                          :items="items"
                ></m-select>
                <label for="select">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-select name="select"
                          id="select"
                          :items="items"
                ></m-select>
                <label for="select">Select</label>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <m-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></m-select>
                <label for="select2">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></m-select>
                <label for="select2">Select</label>
            </div>'
            ></markup>
            <props :props="[['items', 'array, object values, [id, text]'], ['v-model', 'string, number, array (multiple)'], ['select-text', 'set the select text, default: Choose your options']]"></props>
        </m-grid>
        <m-grid s12>
            <h4>Radios</h4>
            <div class="input-field">
                <m-radio name="radio"
                       id="radio"
                       val="1"
                       checked
                >Red</m-radio>
            </div>
            <div class="input-field">
                <m-radio name="radio"
                       id="radio2"
                >Yellow</m-radio>
            </div>
            <div class="input-field">
                <m-radio name="radio"
                       id="radio3"
                       with-gap
                >Green</m-radio>
            </div>
            <div class="input-field">
                <m-radio name="radio"
                       id="radio4"
                       disabled
                >Brown</m-radio>
            </div>
            <markup html='
            <div class="input-field">
                <m-radio name="radio"
                       id="radio3"
                       with-gap
                       val="1"
                       v-model="radio1"
                >Green</m-radio>
            </div>'
            ></markup>
            <p>In order to accommodate v-model on Materialize.css components, to set what the value of the radio is, use the :val property.</p>
            <props :props="radio_props"></props>
        </m-grid>
        <m-grid s12>
            <h4>Checkboxes</h4>
            <div class="input-field">
                <m-checkbox name="checkbox"
                          id="checkbox"
                >Red</m-checkbox>
            </div>
            <div class="input-field">
                <m-checkbox name="checkbox2"
                          id="checkbox2"
                          checked
                >Yellow</m-checkbox>
            </div>
            <div class="input-field">
                <m-checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</m-checkbox>
            </div>
            <div class="input-field">
                <m-checkbox name="checkbox"
                          id="checkbox"
                          indeterminate
                >Indeterminate</m-checkbox>
            </div>
            <div class="input-field">
                <m-checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                          checked
                >Green</m-checkbox>
            </div>
            <div class="input-field">
                <m-checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                >Brown</m-checkbox>
            </div>
            <markup html='
            <div class="input-field">
                <m-checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</m-checkbox>
            </div>'
            ></markup>
            <props :props="checkbox_props"></props>
        </m-grid>
        <m-grid s12>
            <h4>Switches</h4>
            <m-switch></m-switch>
            <p></p><p></p>
            <m-switch checked
                    on="Accept"
                    off="Deny"
            ></m-switch>
            <markup html='
            <m-switch checked
                    on="Accept"
                    off="Deny"
            ></m-switch>'
            ></markup>
            <props :props="switch_props"></props>
        </m-grid>
        <m-grid s12>
            <h4>File Input</h4>
            <div class="input-field">
                <m-file-input></m-file-input>
            </div>
            <markup html='
            <div class="input-field">
                <m-file-input></m-file-input>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <m-file-input multiple></m-file-input>
            </div>
            <markup html='
            <div class="input-field">
                <m-file-input multiple></m-file-input>
            </div>'
            ></markup>
            <props :props="file_props"></props>
        </m-grid>
        <m-grid s12>
            <h4>Range</h4>
            <div class="input-field">
                <m-range></m-range>
            </div>
            <markup html='
            <div class="input-field">
                <m-range></m-range>
            </div>'
            ></markup>
            <props :props="range_props"></props>
        </m-grid>
        <m-grid s12>
            <h4>Date Picker</h4>
            <label for="birthdate">Birthdate</label>
            <m-date-input id="birthdate"
                        name="birthdate"
            ></m-date-input>
            <markup html='
            <label for="birthdate">Birthdate</label>
            <m-date-input id="birthdate"
                        name="birthdate"
            ></m-date-input>'
            ></markup>
            <props :props="[['v-model', 'string']]"></props>
        </m-grid>
        <m-grid s12>
            <h4>Character Counter</h4>
            <div class="input-field">
                <m-text-input name="text"
                            id="text"
                            length="50"
                ></m-text-input>
                <label for="text">Text Input</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-text-input name="text"
                            id="text"
                            length="50"
                ></m-text-input>
                <label for="text">Text Input</label>
            </div>'
            ></markup>
            <div class="input-field">
                <m-text-area name="textarea"
                            id="textarea"
                            length="150"
                ></m-text-area>
                <label for="text">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-text-area name="textarea"
                            id="textarea"
                            length="50"
                ></m-text-area>
                <label for="text">Text Area</label>
            </div>'
            ></markup>
        </m-grid>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                test: 1,
                range_props: [
                    ['min', 'string, number'],
                    ['max', 'string, number'],
                    ['v-model', 'string, number']
                ],
                radio_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['val', 'number, string'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['with-gap', 'boolean']
                ],
                checkbox_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['indeterminate', 'boolean'],
                    ['filled-in', 'boolean']
                ],
                switch_props: [
                    ['on', 'string'],
                    ['off', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'boolean']
                ],
                file_props: [
                    ['multiple', 'boolean']
                ],
                items: [
                    {
                        id: 1,
                        text: 'Select 1'
                    },
                    {
                        id: 2,
                        text: 'Select 2'
                    },
                    {
                        id: 3,
                        text: 'Select 3'
                    },
                ]
            }
        }
    }
</script>