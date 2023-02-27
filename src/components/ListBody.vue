<template>

        <div class="body">
            <NextUpList />
        </div>

    
</template>

<script>
import NextUpList from '@/components/NextUpList.vue'

    export default {
        name: 'ListBody',
        components: {
            NextUpList,
        }
    }
</script>

<style>

.body {
    background-color: white;
    position: relative;
    top: 39px;
    width: 300px;
    padding-bottom: calc(fit-content + 25px);
    padding-left: 5px;
    text-align: left;
}

p {
    padding-top: 5px;
    color: gray;
}

</style>