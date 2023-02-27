<template>
  <div class="header">
      {{ title }}
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: { 
    title: String,
    backgroundColor: String
  },
}
</script>

<style scoped>
.header {
    position: absolute;
    text-align: left;
    padding-left: 5px;
    padding-top: 5px;
    height: 25px;
    width: 300px;
    background: v-bind(backgroundColor);
}
</style>