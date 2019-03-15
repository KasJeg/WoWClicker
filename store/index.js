export const state = () => ({
  gold: 0,
  mines: 1,
  pickUpgrade:50,
  mobsGoldCount: 0,
  mobs: [
    {
      name: "Kobold",
      count: 0,
      price: 10,
      priceGain:10,
      mineValue:1,
      mobsGold:0,
      image: "../img/kobold.gif",
      image_mini: "../img/candle.jpg"
    },
    {
      name: "Gnoll",
      count: 0,
      price: 25,
      priceGain:25,
      mineValue:3,
      image: "../img/gnoll.gif",
      image_mini: "../img/gnoll_mini.jpg"
    },
    {
      name: "Undead Warden",
      count: 0,
      price: 50,
      priceGain:50,
      mineValue:7,
      image: "../img/undead_2.gif",
      image_mini: "../img/undead_mini.PNG"
    },
    {
      name: "Sethrak Scout",
      count: 0,
      price: 100,
      priceGain:100,
      mineValue:15,
      image: "../img/slitherin.gif",
      image_mini: "../img/slitherin_mini.PNG"
    },
    {
      name: "Harvest Golem",
      count: 0,
      price: 500,
      priceGain:500,
      mineValue:30,
      image: "../img/harvest_golem.gif",
      image_mini: "../img/harvest_mini.jpg"
    },
    {
      name: "Arcane Nullifier",
      count: 0,
      price: 2500,
      priceGain:2500,
      mineValue:50,
      image: "../img/arcane_golem.gif",
      image_mini: "../img/nullifier_mini.PNG"
    },
  ]
})

export const mutations = {
  setModalActive (state, value) {
    state.modal.active = value;
  },
  buyCreature(state, index) {
    state.mobs[index].price += state.mobs[index].priceGain;
    state.mobs[index].count += 1;

    let goldPerSecond = 0;
    for (let index = 0; index < state.mobs.length; index++) {
      let valuePerSecond = state.mobs[index].mineValue * state.mobs[index].count;
      goldPerSecond += valuePerSecond;
    }
    this.commit('alterGoldPerSecond', goldPerSecond);

  },
  buyPick(state) {
    state.mines+=1;
    this.commit('addMoney', -state.pickUpgrade);
    state.pickUpgrade += 100;
  },
  addMoney(state, value) {
    state.gold += value;
  },
  alterGoldPerSecond(state, value) {
    state.mobsGoldCount = value;
  }

};

export const actions = {
  toggleModal (context) {
    console.log(context);
    context.commit('setModalActive', !context.state.modal.active);
  }

}
