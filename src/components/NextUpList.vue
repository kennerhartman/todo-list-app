<template>
    <div>

        <input 
            type="text"
            placeholder="Enter an item..."
            @keydown="addItem"
            class="center"
        />

        <div 
            v-for='(item, index) in items'
            :key='item'
        >
            <p><span @click="removeItem(index)">x</span> {{ item }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInput',
        data () {
            return {
                items: [],
                item: ""
            }
        },
        methods: {
            addItem(event) {
                if (event.code == 'Enter') {
                    event.preventDefault()
                    var val = event.target.value.trim()
                    
                    if (val.length > 0) {
                        this.items.push(val)
                        event.target.value = ""

                        localStorage.setItem("items", JSON.stringify(this.items));
                    }
                }
            },
            removeItem(index) {
                this.items.splice(index, 1)

                var storedItems = JSON.parse(localStorage.getItem("items"))
                storedItems.splice(index, 1)
                localStorage.setItem("items", JSON.stringify(storedItems))
            },
        },
        mounted() {
            if (localStorage.items) {
                this.items = JSON.parse(localStorage.getItem("items"));
            }
        }
  }

</script>

<style>
.center {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: calc(99.6%);
}

span {
    cursor: pointer;
}

input {
    position: relative;
    float: center;
    margin: auto;
    right: 5px;
}
</style>