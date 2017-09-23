<template>
    <div class="col s12">
        <h4>Chip Examples</h4>
        <m-chip>Notice</m-chip>
        <markup html='
        <m-chip>Notice</m-chip>'
        ></markup>
        <m-chip class="blue white-text"
              close
        >
            Closable
        </m-chip>
        <markup html='
        <m-chip class="blue white-text" close >
            Closable
        </m-chip>'
        ></markup>
        <props :props="props"></props>

        <h4>Chips Examples</h4>
        <m-chips :data="chipData" 
            :autocompleteData="chipsAutoData" 
            :autocompleteLimit="chipsAutoLimit"
            :placeholder="chipsPlaceholder"
            :secondaryPlaceholder="chipsPlaceholder2"
            @change-chips="chipsListener">
        </m-chips>
        <markup html='
        <m-chips :data="chipData" 
            :autocompleteData="chipsAutoData" 
            :autocompleteLimit="chipsAutoLimit"
            :placeholder="chipsPlaceholder"
            :secondaryPlaceholder="chipsPlaceholder2"
            @change-chips="chipsListener">
        </m-chips>'
        ></markup>
        <markup html="
        export default {
            data () {
                return {
                    chipsAutoData: {
                          'Apple': null,
                          'Microsoft': null,
                          'Microchips': null,
                          'Microprocessor': null,
                          'Google': null
                    },
                    chipsAutoLimit: 2,
                    chipData: [
                        { tag: 'Apple', }, 
                        { tag: 'Microsoft',},
                    ],
                    chipsPlaceholder: 'Tag+',
                    chipsPlaceholder2: 'Type something',
                }
            },
            methods: {
                chipsListener(payload){
                  console.log(payload);
                }
            }
        }"
        ></markup>
        <props :props="chips_props"></props>
        <props :props="chips_events" :title="'Events'" :col1="'Event'" :col2="'Return Type'"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['close', 'boolean']
                ],
                chips_props: [
                    ['data', 'Array[{ tag: String, image: String, id: Number  }]'],
                    ['placeholder', 'String ( Empty )'],
                    ['secondaryPlaceholder', 'String ( Empty )'],
                    ['autocompleteLimit', 'Number ( Infinity)'],
                    ['autocompleteStartLength', 'Number ( 1 )'],
                    ['autocompleteData', 'Object with property names begin the autocomplete values'],
                ],
                chips_events: [
                    ['change-chips', 'Array [Object]']
                ],
                chipsAutoData: {
                      'Apple': null,
                      'Microsoft': null,
                      'Microchips': null,
                      'Microprocessor': null,
                      'Google': null
                },
                chipsAutoLimit: 2,
                chipData: [
                    { tag: 'Apple', }, 
                    { tag: 'Microsoft',},
                ],
                chipsPlaceholder: 'Tag+',
                chipsPlaceholder2: 'Type something',
            }
        },
        methods: {
            chipsListener(payload){
              console.log(payload)
            }
        }
    }
</script>