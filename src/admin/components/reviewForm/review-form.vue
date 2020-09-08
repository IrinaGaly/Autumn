<template>
  <div class="form-reviews-compomnent">
    <form action class="form" @submit.prevent="handleSubmit">
      <card class="edit-work" title="Новый отзыв">
        <div slot="content" class="form-content">
          <div class="info">
            <div class="info-wrap">
              <div class="review-col">
                <div class="photo">
                </div>
                <label >
                  <div class="work-input">
                    <div class="btn-wrap">
                      <appButton plain typeAttr="file" title="Добавить фотографию"
                      @change="handleChange"/>
                    </div>
                  </div>
                </label>
              </div>
              <div class="review-container">
                <app-input v-model="newReview.author" class="name-input" title="Имя автора" />
                <app-input v-model="newReview.occ" class="occ-input" title="Титул автора" />
                <app-input v-model="newReview.text"  title="Отзыв" fieldType="textarea" />
              </div>
            </div>
            <div class="add-info-btns">
              <appButton plain @click="$emit('close')" title="Отмена"/>
              <appButton typeAttr="submit" title="СОХРАНИТЬ"/>
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import "./../../../styles/main.pcss";

import appButton from "../../components/button"
import input from "./../../components/input/input";
import card from "./../card/card";
import button from "../button/button";

//import appButton from "../../components/button";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    card,
    appButton: button,
    appInput: input,
    button
  },
  props: {
    review: {
      type: Object || null,
      default: null,
    },
    shownForm: {
      type: Boolean,
    },
  },
   data() {
    return {
      newReview: {
        author: "",
        occ: "",
        photo: {},
        text: ""
        
      } 
    }
  },
 
  methods: {
     ...mapActions({
      addNewReview: "reviews/add",
      editReview: "review/edit",
    }),

    
    // async handleSubmit() {
    //   await this.addNewReview(this.newReview);
    //   this.$emit("submit"); 
    // }, 
    async handleSubmit() {
        await this.addNewReview(this.newReview);
        this.$emit("submit");
      }
    },

     handleChange(event) {
      event.preventDefault();

      const file = event.dataTransfer ? 
      event.dataTransfer.files[0] :
      event.target.files[0];

      this.newReview.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },

    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.newReview.preview = reader.result;
      }

      reader.onerror = () => {
        this.showTooltip({
             text: error.response.data.error,
             type: "error"
           })
      }

      reader.onabort = () => {
        this.showTooltip({
             text: error.response.data.error,
             type: "error"
           })
      }
    }
  }

</script>

<style lang="postcss" src="./review-form.pcss" scoped>

</style>
