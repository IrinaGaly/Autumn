<template>
  <div class="form-works-component">
    <form action class="form" @submit.prevent="handleSubmit">
      <card  class="edit-work" title="Редактирование работы">
        <div slot="content" class="form-content">
          <label 
          :style="{backgroundImage: `url(${newWork.preview})`}"
          class="upload-container" :class="['upload', {active: newWork.preview}, {
            hovered: hovered }]" 
            @dragover="handleDragOver"
            @dragleave="hovered = false"
            @drop="handleChange">
            <div class="work-input">
              <p class="work-text">Перетащите или загрузите для загрузки изображения</p>
              <div class="btn-container">
                <appButton typeAttr="file"
                @change="handleChange" />
              </div>
            </div>
          </label>
          <div class="info">
            <app-input v-model="newWork.title" class="name-input" title="Название" />
            <app-input v-model="newWork.link" class="link-input" title="Ссылка" />
            <app-input  v-model="newWork.description" title="Описание" fieldType="textarea" />
            <tags-adder v-model="newWork.techs" class="tag-adder" />
            <div class="add-info-btns">
              <appButton plain  title="Отмена"/>
              <appButton typeAttr="submit" title="СОХРАНИТЬ"/>
            </div>
          </div>
          <!-- <tooltip text="Текст внутри"></tooltip> -->
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import "./../../../styles/main.pcss";
import card from "../card/card";
import button from "../button/button";
import input from "../input/input";
import tagsAdder from "../tagsAdder";
import appButton from "../../components/button";
import tooltip from "../../components/tooltip"
//import addImg from "../addImg"

import { mapActions, mapState } from "vuex";


export default {
  components: {
    card,
    appButton: button,
    appInput: input,
    tagsAdder,
    tooltip
    //addImg
  },
  props: {
    formIsShown: {
      type: Boolean
    }
  },
  data() {
    return {
      hovered: false,
      newWork: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: {},
        preview: ""
      }
    }
  },
  methods: {
     ...mapActions({
      addNewWork: "works/add",
    }),

    
    async handleSubmit() {
      await this.addNewWork(this.newWork);
        addNewWork.title = ""
    //   this.link = "",
    //   this.description = "",
    //   this.techs = "",
    //   this.preview = "",
    //   this.photo = {}
    }, 
    
    handleChange(event) {
      event.preventDefault();

      const file = event.dataTransfer ? 
      event.dataTransfer.files[0] :
      event.target.files[0];

      this.newWork.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },

    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.newWork.preview = reader.result;
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
    },
    // cancelForm() {
    //   this.title = "",
    //   this.link = "",
    //   this.description = "",
    //   this.techs = "",
    //   this.preview = "",
    //   this.photo = {}
    // }
  }
  
};
</script>

<style lang="postcss" src="./works-form.pcss" scoped ></style>