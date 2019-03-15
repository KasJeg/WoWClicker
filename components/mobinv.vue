<template>
  <div class="ownedWindow">
    <img class="mobImg" :src="image_mini">
    <br>
    <h2>{{ name }}: {{ count }}</h2>
    <br>
  </div>
</template>

<script>
    export default {
        name: "mobinv",
        props:['name', 'count', 'image_mini']
    }
</script>

<style scoped>

  .ownedWindow{
    display: inline-flex;
    margin-left: 50px;
  }
  .mobImg{
    display: inline-flex;
    width: 50px;
    height: 50px;
  }
</style>
