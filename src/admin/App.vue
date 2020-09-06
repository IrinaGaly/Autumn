<template>
  <div class="app-container">
    <router-view name="header" />
    <router-view />
    <div :class="['notify-container', {active: isTooltipIsshown}]">
      <div class="notification">
        <notification 
          
        />
      </div>
    </div>
  </div>
</template>


<script>
import headline from "./components/headline"
import user from "./components/user"
import navigation from "./components/navigation"
import button from "./components/button"
import category from "./components/category"
import tagsAdder from "./components/tagsAdder"
import workCard from "./components/work-card"
import squareBtn from "./components/button"
import notification from "./components/notification"
import {mapState, mapActions} from "vuex";


export default {
  components: {
    headline,
    user,
    navigation,
    iconedButton: button,
    category,
    workCard,
    tagsAdder,
    squareBtn,
    notification
  },
   methods: {
    ...mapActions({
      hideTooltip: "tooltips/hide"
    })
  },
  computed: {
    ...mapState("tooltip", {
      isTooltipIsshown: state => state.isShow,
      tooltipText: state => state.text,
      tooltipText: state => state.type,
    })
  }
}
  
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>