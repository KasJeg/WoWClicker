<template>
  <div class="mobWindow">
    <img src="../static/img/kobold.gif">
    <br>
    <button class="buy" v-on:click="sendInfo" >Buy a Kobold ({{koboldPrice}}g)</button>
  </div>
</template>

<script>
    export default {
        name: "Kobold",
        data(){
          return {
            koboldPrice:10
          }
        },
        methods:{
          sendInfo: function() {
            this.$emit("kobold");
          },
        }
    }
</script>

<style scoped>

</style>
