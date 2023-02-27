<template>

    <router-link to="/">Home</router-link>

    <div class="wrapper">
        <div class="container">
            <ListHeader title="Ideas" backgroundColor="#BDBDBD" />
            <IdeaList class="list" />
        </div>
        
        <div class="container">
            <ListHeader title="Working on" backgroundColor="#4778EC" />
            <WorkingOnList class="list"/>
        </div>
        
        <div class="container">
            <ListHeader title="Completed" backgroundColor="#5BBC50" />
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
}

span {
    cursor: pointer;
}

hr {
    border: solid 1px rgb(209, 209, 209);
}

div {
    overflow-wrap: break-word;
}

.list {
    position: relative;
    top: 30.2px;
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
    font-family: 'Radio Canada', sans-serif;
    font-size: 15px;
}

.global-input:focus {
    outline: none;
}

.global-p {
    left: 5px;
    color: black;
    padding-bottom: 10px;
}

.idea-wrapper {
    background: white;
    width: 101.2%;
}
</style>