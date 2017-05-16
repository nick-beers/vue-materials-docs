<template>
    <div>
        <m-grid s12>
            <h4>Examples</h4>
            <m-btn-link @click.native="$dialog('Toast!')">Toast!</m-btn-link>
            <markup html='
            <m-btn-link @click.native="$dialog(&apos;Toast!&apos;)">Toast!</m-btn-link>'
            ></markup>
            <m-btn-link @click.native="$dialog('Rounded Toast!', 3000, 'rounded')">Round Toast!</m-btn-link>
            <markup html='
            <m-btn-link @click.native="$dialog(&apos;Rounded Toast!&apos;, 3000, &apos;rounded&apos;)">Round Toast!</m-btn-link>'
            ></markup>
            <m-btn-link @click.native="$dialog('Toast with callback!', 3000, '', callback)">Toast with callback!</m-btn-link>
            <markup html='
            <m-btn-link @click.native="$dialog(&apos;Toast with callback!&apos;, 3000, &apos;&apos;, callback)">Toast with callback!</m-btn-link>'
            ></markup>
            <h4>Method</h4>
            <markup html='
            methods: {
                callback () {
                    alert(&apos;Your toast was dismissed&apos;)
                }
            }'
            ></markup>
        </m-grid>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            callback () {
                alert('Your toast was dismissed')
            }
        }
    }
</script>
