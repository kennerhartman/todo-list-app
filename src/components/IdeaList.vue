<template>
    <div class="idea-wrapper">
        <input 
            type="text"
            placeholder="Enter an item..."
            @keydown="addItem"
            class="global-center global-input"
        />

        <hr>

        <div 
            v-for='(ideaItem, index) in ideaItems'
            :key='ideaItem'
            >
            <p class="global-p card"><span @click="removeItem(index)">x</span> {{ ideaItem }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInput',
        props: [],
        data () {
            return {
                ideaItems: [],
                ideaItem: ""
            }
        },
        methods: {
            addItem(event) {
                if (event.code == 'Enter') {
                    event.preventDefault()
                    var val = event.target.value.trim()
                    
                    if (val.length > 0) {
                        this.ideaItems.push(val)
                        event.target.value = ""

                        localStorage.setItem("ideaItems", JSON.stringify(this.ideaItems));
                    }
                }
            },
            removeItem(index) {
                this.ideaItems.splice(index, 1)

                var storedItems = JSON.parse(localStorage.getItem("ideaItems"))
                storedItems.splice(index, 1)
                localStorage.setItem("ideaItems", JSON.stringify(storedItems))
            },
        },
        mounted() {
            if (localStorage.ideaItems) {
                this.ideaItems = JSON.parse(localStorage.getItem("ideaItems"));
            }
        }
  }

</script>

<style>
.idea-wrapper {
    background: white;
    width: 101.2%;
}

span {
    cursor: pointer;
}

</style>