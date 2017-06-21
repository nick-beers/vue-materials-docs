<template>
    <div>
        <m-grid s12>
            <h4>Examples</h4>

            <m-btn-link id="featureDiscoveryTarget" type="button" floating wavesLight>B</m-btn-link>
            <m-btn type="button" wavesLight v-m-tap-target:tapTargetDiv>Open Feature Discovery</m-btn>
            <m-tap-target id="tapTargetDiv" dataActivates="featureDiscoveryTarget">
              <h2>FD Title</h2>
              <p>Feature Discovery bit of text</p>
            </m-tap-target>
            <markup html='
            <m-btn-link id="featureDiscoveryTarget" type="button" floating wavesLight>B</m-btn-link>
            <m-btn type="button" wavesLight v-m-tap-target:tapTargetDiv>Open Feature Discovery</m-btn>
            <m-tap-target id="tapTargetDiv" dataActivates="featureDiscoveryTarget">
              <h2>FD Title</h2>
              <p>Feature Discovery bit of text</p>
            </m-tap-target>'
            ></markup>
            <props :props="props"></props>
            <p>
                The dataActivates property is a string id and the <b>&lt;m-tap-target&gt;</b> will reposition to be focused around the dataActivates element.
            </p>

        </m-grid>
    </div>
</template>

<script type="text/babel">
    export default {
        data(){
            return {
                props: [
                    ['dataActivates (required)', 'String'],
                ],
            }
        }
    }
</script>
