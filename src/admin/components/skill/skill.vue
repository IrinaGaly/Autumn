<template>
  <div class="skill-component" v-if="currentSkill.editmode === false" >
    <div class="title">{{skill.title}}</div>
    <div class="info">
      <div class="percent">{{skill.percent}} %</div>
      <div class="buttons">
        <icon symbol="pencil" class="btn" @click="currentSkill.editmode = true" grayscale />
        <icon symbol="trash" class="btn" @click="$emit('remove', currentSkill)" grayscale />
      </div>
    </div>
  </div>
  <div class="skill-component" v-else >
    <div class="title">
       <!-- errorMesage="validation.firstError('currentSkill.title')" -->
      <app-input 
    
      noSidePaddings v-model="currentSkill.title" />
    </div>
    <div class="percent">
      <!-- :errorMesage="validation.firstError('currentSkill.percent')" -->
      <app-input 
      
      v-model="currentSkill.percent" type="number" min="0" max="100" maxlength="3" />
    </div>
    <div class="buttons">
      <icon 
      symbol="tick" 
      class="btn" ç
      @click="$emit('approve', currentSkill)" /> />
      <icon 
      symbol="cross" 
      class="btn" 
      @click="currentSkill.editmode = false" />
    </div>
  </div>
</template>

<script>
import input from "../input";
import icon from "../icon";
import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';



export default {
  
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
     }
  },
  data() {
    return {
    editmode: false,
    currentSkill: {
      editmode: false,
      id: this.skill.id,
      title: this.skill.title,
      percent: this.skill.percent,
      category: this.skill.category
    }, 
      
    }
  },
  components: {
    icon,
    appInput: input
  },
  // methods: {
  //   approve: function() {
  //     this.$validate()
  //       .then(function(success) {
  //           console.log(success);
  //         if (success) {
  //           return
  //         }
  //       });
  //     }
  // }
}
</script>

<style lang="postcss" src="./skill.pcss"></style>