<template>

    <router-link to="/">Home</router-link>

    <div class="wrapper">

        

        <div>
            <ListHeader title="Next up" />
            <ListBody />
        </div>
        
        <div>
            <ListHeader title="Working on" />
        </div>
        
        <div>
            <ListHeader title="Completed" />
        </div>
    </div>

</template>

<script>
import ListHeader from '@/components/ListHeader.vue'
import ListBody from '@/components/ListBody.vue'


export default {
    components: {
        ListHeader,
        ListBody,
    },
    props: { }
}
</script>

<style>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

</style>