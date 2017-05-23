<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-table bordered responsive highlight :columns="columns" :tableData="tableData" :rowKey="tableKey"></m-table>
        <markup html='
        <m-table bordered responsive highlight :columns="columns" :tableData="tableData" :rowKey="tableKey"></m-table>'></markup>

        <p>
            The table columns are sortable by clicking on the headers and have a multi-sort capability by using <b>ctrl + click</b> to sort by multiple columns. To exclude columns from rendering just leave it out of the columns list. The <b>tableKey</b> property is required by the transition-group and optimizes the row rendering against your tableData source.
        </p>

        <markup html="
            export default {
                data () {
                    return {
                        columns: [ 
                            { name: 'id', hasSort: true },
                            { name: 'firstname', hasSort: true },
                            { name: 'lastname', hasSort: false },
                            { name: 'active', hasSort: true },
                        ],
                        tableKey: 'id',
                        tableData: [
                            { id: 1, firstname: 'Sarah', lastname: 'Alpha', active: true },
                            { id: 2, firstname: 'Sarah', lastname: 'Delta', active: false },
                            { id: 3, firstname: 'Johnathan James', lastname: 'Delta', active: true },
                            { id: 4, firstname: 'Marshall', lastname: 'Beta', active: false },
                            { id: 5, firstname: 'Marshall', lastname: 'Charlie', active: true },
                            { id: 6, firstname: 'Sarah', lastname: 'Alpha', active: true },
                            { id: 7, firstname: 'Sarah', lastname: 'Delta', active: false },
                            { id: 8, firstname: 'Johnathan James', lastname: 'Delta', active: true },
                            { id: 9, firstname: 'Marshall', lastname: 'Beta', active: false },
                            { id: 10, firstname: 'Marshall', lastname: 'Charlie', active: true },
                            { id: 11, firstname: 'Sarah', lastname: 'Epsilon', active: true },
                            { id: 12, firstname: 'Kevin', lastname: 'Foxtrot', active: false },
                            { id: 13, firstname: 'Kevin', lastname: 'Gamma', active: true },
                            { id: 14, firstname: 'Marshall', lastname: 'Beta', active: false },
                            { id: 15, firstname: 'Albert', lastname: 'Charlie', active: true }
                        ]
                    }
                }
            }
        "></markup>

        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['tableKey (required)', 'string'],
                    ['columns', 'array of { name: string, hasSort: boolean }'],
                    ['tableData', 'array'],
                    ['bordered', 'boolean'],
                    ['striped', 'boolean'],
                    ['highlight', 'boolean'],
                    ['centered', 'boolean'],
                    ['responsive', 'boolean']
                ],
                columns: [ 
                    { name: 'id', hasSort: true },
                    { name: 'firstname', hasSort: true },
                    { name: 'lastname', hasSort: false },
                    { name: 'active', hasSort: true },
                ],
                tableKey: 'id',
                tableData: [
                    { id: 1, firstname: 'Sarah', lastname: 'Alpha', active: true },
                    { id: 2, firstname: 'Sarah', lastname: 'Delta', active: false },
                    { id: 3, firstname: 'Johnathan James', lastname: 'Delta', active: true },
                    { id: 4, firstname: 'Marshall', lastname: 'Beta', active: false },
                    { id: 5, firstname: 'Marshall', lastname: 'Charlie', active: true },
                    { id: 6, firstname: 'Sarah', lastname: 'Alpha', active: true },
                    { id: 7, firstname: 'Sarah', lastname: 'Delta', active: false },
                    { id: 8, firstname: 'Johnathan James', lastname: 'Delta', active: true },
                    { id: 9, firstname: 'Marshall', lastname: 'Beta', active: false },
                    { id: 10, firstname: 'Marshall', lastname: 'Charlie', active: true },
                    { id: 11, firstname: 'Sarah', lastname: 'Epsilon', active: true },
                    { id: 12, firstname: 'Kevin', lastname: 'Foxtrot', active: false },
                    { id: 13, firstname: 'Kevin', lastname: 'Gamma', active: true },
                    { id: 14, firstname: 'Marshall', lastname: 'Beta', active: false },
                    { id: 15, firstname: 'Albert', lastname: 'Charlie', active: true }
                ]
            }
        }
    }
</script>
