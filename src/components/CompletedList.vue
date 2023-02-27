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
            v-for='(completedItem, index) in completedItems'
            :key='completedItem'
            >
            <p class="global-p card">
                <span @click="removeItem(index)"><img src="@/assets/trash-icon.png" class="trash-icon"></span>
                {{ completedItem }} 
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInput',
        props: [],
        data () {
            return {
                completedItems: [],
                completedItem: ""
            }
        },
        methods: {
            addItem(event) {
                if (event.code == 'Enter') {
                    event.preventDefault()
                    var val = event.target.value.trim()
                    
                    if (val.length > 0) {
                        this.completedItems.push(val)
                        event.target.value = ""

                        localStorage.setItem("completedItems", JSON.stringify(this.completedItems));
                    }
                }
            },
            removeItem(index) {
                this.completedItems.splice(index, 1)

                var storedItems = JSON.parse(localStorage.getItem("completedItems"))
                storedItems.splice(index, 1)
                localStorage.setItem("completedItems", JSON.stringify(storedItems))
            },
        },
        mounted() {
            if (localStorage.completedItems) {
                this.completedItems = JSON.parse(localStorage.getItem("completedItems"));
            }
        }
  }

</script>

<style>
span {
    cursor: pointer;
}

</style>