<template>
  <div id="app">
      <div class="itemWindow">
        <img class="itemImg" src="../static/img/gold.jpg">
        <br>
        <h2>Gold: {{ this.$store.state.gold }}</h2>
      </div>
      <br>
      <div class="itemWindow">
        <img class="itemImg" src="../static/img/mob_gold.jpg">
        <br>
        <h2>Gold mined by NPCs: {{ this.$store.state.mobsGoldCount }}</h2>
      </div>
      <br>
      <div class="itemWindow">
        <img class="itemImg" src="../static/img/equiped_pick.jpg">
        <br>
        <h2>Mining Pick lvl: {{this.$store.state.mines }}</h2>
      </div>
      <br>
      <div class="itemWindow">
        <button class="mineButton" v-on:click="mineGold" ></button>
        <br>
        <h2>Use Mining Pick</h2>
      </div>
      <br>
      <div class="itemWindow">
        <button class="buyPickUpgrade" v-on:click="buyPick" ></button>
        <br>
        <h2>Upgrade Mining Pick lvl ({{this.$store.state.pickUpgrade}}g)</h2>
      </div>
      <br>
      <div class="ownedMobs">
        <mobinv v-for="(mobinv) in this.$store.state.mobs" :name="mobinv.name" :image_mini="mobinv.image_mini" :count="mobinv.count"></mobinv>
      </div>
      <div class="ActionZone">
        <mob v-for="(mob, index) in this.$store.state.mobs" :price="mob.price" :image="mob.image" :name="mob.name" @bought="buyUpgrade(index)" ></mob>
      </div>
  </div>
</template>

<script>

  import Modal from "../components/modal";
  import Mob from "../components/mob";
  import Mobinv from "../components/mobinv";
  import "../fonts/LifeCraft_Font.ttf";


  export default {
    components: {Mob, Modal, Mobinv},
    data () {
      return {
      }
    },
    methods: {
      buyUpgrade(index) {
        if ((this.$store.state.gold) >= this.$store.state.mobs[index].price) {
          this.$store.commit('addMoney', -this.$store.state.mobs[index].price);
          this.$store.commit('buyCreature', index);
        }
      },
      mineGold: function() {
        this.$store.commit('addMoney', 1 * this.$store.state.mines);
      },
      buyPick: function() {
        if ((this.$store.state.gold) >= this.$store.state.pickUpgrade){
          this.$store.commit('buyPick');
        }
      },
      mobsMine: function() {
        for (let index = 0; index < this.$store.state.mobs.length; index++) {
          let valuePerSecond = this.$store.state.mobs[index].mineValue * this.$store.state.mobs[index].count;
          this.$store.commit('addMoney', valuePerSecond);
        }
      },
    },
    mounted: function() {
      setInterval(this.mobsMine, 1000);
    },

  }
</script>
<style>
  #app {
    background-image: url("../static/img/minebghd.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
  img {
    width: 250px;
    height: 250px;
  }
  h1
  {
    margin-left: 50px;
  }
  .itemWindow{
    margin-left: 50px;
  }
  .ActionZone
  {
    margin-top: 130px;
    display: inline-flex;
  }
  .mineButton
  {
    display: inline-flex;
    background-image: url("../static/img/mining.PNG");
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
  }
  .buyPickUpgrade
  {
    display: inline-flex;
    background-image: url("../static/img/upgrade.PNG");
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
  }
  .itemImg
  {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }
  .itemWindow{
    display: inline-flex;
  }
  .ownedMobs{
    margin-top: 50px;
    display: grid;
  }
  @font-face {
    font-family: "LifeCraft";
    src: url("../fonts/LifeCraft_Font.ttf");
  }

</style>
