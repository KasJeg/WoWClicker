<<template>
  <div>
    <div class="tabs">
      <ul>
        <!--<li class="is-active"><a>Pictures</a></li>-->
        <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}"><a @click="setActive(tab.title)">{{tab.title}}</a></li>
      </ul>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs",
    data() {
      return {
        tabs: [],
      }
    },
    created(){
      this.tabs = this.$children;
    },
    methods: {
      setActive(title){
        this.tabs.map(tab => {
          if(tab.title == title){
            tab.isActive = true;
          } else {
            tab.isActive = false;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
