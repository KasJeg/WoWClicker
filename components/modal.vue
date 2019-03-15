<template>
  <div class="modal" :class="{'is-active' : modal.active}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button @click="modalClicked" class="modal-close is-large" aria-label="close" ></button>
  </div>
</template>

<script>
  export default {
    name: "modal",
    data(){
      return {

      }
    },
    methods: {
      modalClicked(){
        this.$store.dispatch('toggleModal');
      }
    },
    computed: {
      modal() {
        return this.$store.state.modal;
      }
    }
  }
</script>

<style scoped>

</style>
