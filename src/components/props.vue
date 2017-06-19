<template>
    <div>
        <h4>{{tableTitle}}</h4>
        <table>
            <thead>
                <tr>
                    <th>{{firstHeader}}</th>
                    <th>{{secondHeader}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prop in props">
                    <td v-for="value in prop">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['props', 'title', 'col1', 'col2'],
        computed: {
            tableTitle(){
                return this.title || 'Props';
            },
            firstHeader() {
                return this.col1 || 'Prop';
            },
            secondHeader() {
                return this.col2 || 'Type';
            }
        }
    }
</script>