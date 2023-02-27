<template>
  <div>
    <div class="header">
      <div> {{ title }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: { 
    title: String,
    color: String
  },
}
</script>

<style scoped>
.header {
  position: absolute;
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  height: 50px;
  width: 300px;
  background: v-bind(color);
}

</style>
