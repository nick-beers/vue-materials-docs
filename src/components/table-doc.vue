<template>
    <div class="col s12">
        <h4>Example</h4>
        <m-table bordered responsive highlight :options="options" :columns="columns" :tableData="data"></m-table>
        <markup html='
        <m-table bordered responsive highlight :options="options" :columns="columns" :tableData="data"></m-table>'></markup>

        <p>
            The table columns are sortable by clicking on the headers and have a multi-sort capability by using <b>ctrl + click</b> to sort by multiple columns. To exclude columns from rendering just leave it out of the columns list. The table is designed to be a display system so filtering is expected to be done against the master dataset before being passed into the tableData prop.
        </p>

        <markup html="
export default {
        data () {
            return {
                columns: [ 
                    'id', 
                    { id: 'firstname', displayText: 'First Name'},
                    { 
                        id: 'lastname', 
                        cellRenderer: function(ce, rd, co, vi) { 
                            return  ce('td', {}, [ rd['lastname'].toString() ])}
                        }, 
                    'active' 
                ],
                options: {
                    rowKey: 'id',
                    paging: true,
                    pagingDefault: 5,
                    pagingOptions: [5,10,25,50],
                    sortable: true,
                    selectable:true
                },
                data: [
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
        <h5>Columns and Column Data Object</h5>
        <p>
            The columns array can contain either a string matching the data object property, or it can contain a columnDataObject like the example below. The array may also support a combination of both like in the full table example. The cellRenderer must return a <b>&lt;td&gt;</b> as the parent element, but the cell renderer allows you to follow the <a href="https://vuejs.org/v2/guide/render-function.html">vue documentation on render functions</a> to create anything as the table cell contents with full programatic control. 
        </p>
        <markup html="
        let columnDataObject = {
            id: 'firstname',
            displayText: 'First Name',
            cellClasses: 'red-text bold-text',
            headerClasses: 'blue-text italic-text',
            cellRenderer: function(createElement, rowData, column, vueInstance){
                return createElement('td', {}, [rowData[column].toString()])
            }
        }
        "></markup>
        <props :props="columnDataProps" title="ColumnDataObject Props"></props>
        <props :props="props" title="Table Props"></props>
        <p>
            The columns object reflects all columns that will be included in the table, the table headers will reflect the property names by default when using strings and are capitalized and separated on camelCase, underscores, and dashes. 
        </p>
        <p>
            The options.rowKey is expected to be a unique property to enable controls and improve the rendering of the table rows based on Vue's key property.
        </p>

        <props :props="events" title="Events" col1="Event" col2="Return Type"></props>
        <p>
            The only event emitted currently will trigger whenever a checkbox is clicked on the table controls. The selection currently persists across multiple pages allowing for bulk selection. 
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['bordered', 'boolean'],
                    ['striped', 'boolean'],
                    ['highlight', 'boolean'],
                    ['centered', 'boolean'],
                    ['responsive', 'boolean'],
                    ['columns', 'array[String | columnDataObject ]'],
                    ['tableData', 'array[Object]'],
                    ['selectedRows', 'array[(rowkey type)]'],
                    ['options.rowKey', 'string (default = \'id\')'],
                    ['options.paging', 'boolean (default = false)'],
                    ['options.pagingDefault', 'number (default = 5)'],
                    ['options.pagingOptions', 'array[number] (default = [5, 10, 25, 50])'],
                    ['options.sortable', 'boolean (default = true)'],
                    ['options.selectable', 'boolean (default = false)']
                ],
                columnDataProps: [
                    ['id', 'Any'],
                    ['displayText', 'string | number'],
                    ['cellRenderer', 'function'],
                    ['cellClasses', 'array[string|number] | string'],
                    ['headerClasses', 'array[string|number] | string'],
                ],
                events: [
                    ['selected-update', 'Array[rowKey]']
                ],
                columns: [ 
                    'id', 
                    { id: 'firstname', displayText: 'First Name'},
                    { id: 'lastname', cellRenderer: function(ce, rd, co, vi) { return  ce('td', {}, [ rd['lastname'].toString() ])}}, 
                    'active' 
                ],
                options: {
                    rowKey: 'id',
                    paging: true,
                    pagingDefault: 5,
                    pagingOptions: [5,10,25,50],
                    sortable: true,
                    selectable:true
                },
                data: [
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
                ],
            }
        }
    }
</script>
