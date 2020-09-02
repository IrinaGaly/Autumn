<template>
  <div class="form-works-component">
    <form action class="form">
      <card title="Редактирование работы">
        <div slot="content" class="form-content">
          <div class="info">
            <app-input class="name-input" title="Название" />
            <app-input class="link-input" title="Ссылка" />
            <app-input  title="Описание" fieldType="textarea" />
            <tags-adder class="tag-adder" />
            <div class="add-info-btns">
              <appButton plain  title="Отмена"/>
              <appButton typeAttr="submit" title="СОХРАНИТЬ"/>
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import "../styles/main.pcss";
import card from "../card/card";
import button from "../button/button";
import input from "../input/input";
import tagsAdder from "../tagsAdder";
import { mapActions, mapState } from "vuex";


export default {
  components: {
    card,
    appButton: button,
    appInput: input,
    tagsAdder
  },
};
</script>

<style lang="postcss" src="./worksForm.pcss" scoped ></style>