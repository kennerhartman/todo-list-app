<template>

    <router-link to="/">Home</router-link>

    <div class="wrapper">
        <div class="container">
            <ListHeader title="Ideas" color="#BDBDBD" />
            <IdeaList class="list" />
        </div>
        
        <div class="container">
            <ListHeader title="Working on" color="#4778EC" />
            <WorkingOnList class="list"/>
        </div>
        
        <div class="container">
            <ListHeader title="Completed" color="#5BBC50" />
            <CompletedList class="list"/>
        </div>

        <div>
            <p>&nbsp;</p>
        </div>
    </div>

</template>

<script>
import ListHeader from '@/components/ListHeader.vue'
import IdeaList from '@/components/IdeaList.vue'
import WorkingOnList from '@/components/WorkingOnList.vue'
import CompletedList from '@/components/CompletedList.vue'


export default {
    components: {
        ListHeader,
        WorkingOnList,
        IdeaList,
        CompletedList
    },
    props: [],
    methods: { }
}
</script>

<style>
@media only screen and (max-width: 1020px) {
    .wrapper {
        display: grid !important;
        grid-template-columns: 1fr !important;
        grid-gap: 100px !important;
        grid-column-gap: 3rem;
        width: 301.5px;
    }

    .container {
        left: auto;
        right: auto;
    }

    .global-input {
        max-width: 315px !important;
    }

    .idea-wrapper {
        max-width: 315px !important;
    }
}

hr {
    border: solid 1px rgb(209, 209, 209);
}

div {
    overflow-wrap: break-word;
}

.container {
    position: relative;
    top: 55px;
}

.trash-icon {
    position:relative;
    bottom: 1px;
    left: 20px;
    height: 20px;
    float: right;
    cursor: pointer;
}

.trash-icon:hover {
    opacity: 0.5;
    cursor: pointer;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    margin-left: auto;
    margin-right: auto;
}

.global-input {
    float: center;
    margin: auto;
    width: 98%;
    border: none;
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
}

.global-input:focus {
    outline: none;
}

.global-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.global-p {
    position: relative;
    text-align: left;
    left: 5px;
    color: black;
    padding-bottom: 15px;
    inline-size: 90%; 
}

.idea-wrapper {
    background: white;
    width: 101.2%;
}
</style>