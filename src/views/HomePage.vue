<template>

    <router-link to="/lists">List</router-link>

    <div class="wrapper">

        

        <div>
            <ListHeader title="Ideas" />
            <IdeaList class="list" />
        </div>
        
        <div>
            <ListHeader title="Working on" />
            <WorkingOnList class="list"/>
        </div>
        
        <div>
            <ListHeader title="Completed" />
            <CompletedList class="list"/>
        </div>
    </div>

</template>

<script>
import ListHeader from '@/components/ListHeader.vue'
import IdeaList from '@/components/IdeaList.vue'

export default {
    components: {
        ListHeader,
        IdeaList,
    },
    props: [],
    methods: { }
}
</script>

<style>
hr {
    border: solid 1px rgb(209, 209, 209);
}

div {
    overflow-wrap: break-word;
}

.list {
    position: relative;
    top: 55px;
}

.trash-icon {
    position:relative;
    bottom: 1px;
    padding-right: 5px;
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
    width: 1000px;
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
    left: 25px;
    color: black;
    padding-bottom: 15px;
    inline-size: 90%; 
}
</style>