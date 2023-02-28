<template>
    <div class="idea-wrapper">

        <input 
            type="text"
            placeholder="Enter an item..."
            @keydown="addItem"
            class="global-input"
        />

        <hr>

        <div 
            v-for='(workingOnItem, index) in workingOnItems'
            :key='workingOnItem'
        >
            <p class="global-p">
                <span @click="removeItem(index)"><img src="@/assets/trash-icon.png" class="trash-icon"></span>
                {{ workingOnItem }} 
                <span class="drop">.</span>
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
                workingOnItems: [],
                workingOnItem: ""
            }
        },
        methods: {
            addItem(event) {
                if (event.code == 'Enter') {
                    event.preventDefault()
                    var val = event.target.value.trim()
                    
                    if (val.length > 0) {
                        this.workingOnItems.push(val)
                        event.target.value = ""

                        localStorage.setItem("workingOnItems", JSON.stringify(this.workingOnItems));
                    }
                }
            },
            removeItem(index) {
                this.workingOnItems.splice(index, 1)

                var storedItems = JSON.parse(localStorage.getItem("workingOnItems"))
                storedItems.splice(index, 1)
                localStorage.setItem("workingOnItems", JSON.stringify(storedItems))
            },
        },
        mounted() {
            if (localStorage.workingOnItems) {
                this.workingOnItems = JSON.parse(localStorage.getItem("workingOnItems"));
            }
        }
  }

</script>