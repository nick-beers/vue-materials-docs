<template>
    <m-grid s12>
        <h4>NPM <i style="font-size: 16px;">Based on 1.4.1 of @edge_blade/vue-materials</i></h4>
        <markup html='
        npm install @edge_blade/vue-materials'
        ></markup>
        <h4>JavaScript</h4>
        <markup html='
        import Vue from "vue"
        import Materials from "@edge_blade/vue-materials"
        Vue.use(Materials)'
        ></markup>
        <h4>HTML</h4>
        <markup html='
        <head>
            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.css" rel="stylesheet">
        </head>
        <body>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.js"></script>
        </body>
        '
        ></markup>
    </m-grid>
</template>