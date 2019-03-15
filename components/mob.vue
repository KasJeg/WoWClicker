<template>
  <div class="mobWindow">
    <img :src="image">
    <br>
    <button class="buy" v-on:click="$emit('bought')" >Buy a {{name}} ({{price}}g)</button>
  </div>
</template>

<script>
    export default {
        name: "mob",
        props:['price', 'name', 'image']
    }
</script>

<style scoped>
  .buy
  {
    margin-left: 50px;
  }
</style>
