<template>
  <div class="work-card">
    <div class="preview">
      <img :src="work.photo" class="picture">
      <div class="tags">
        <ul class="tags-list">
          <li class="tags-item" v-for="tag in tags" :key="tag.id">
            <tag :title="tag" />
          </li>
        </ul>
      </div>
    </div>
    <div class="desc">
      <h4 class="work-title">{{work.title}}</h4>
      <p class="text">{{work.desc}}</p>
      <a class="link">{{work.link}}</a>
      <div class="work-btn">
        <icon class="pencil" symbol="pencil" title="Править" />
        <icon symbol="cross" title="Удалить" />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../icon";
import tag from "../tag";

export default {

  components: {
    icon,
    tag
  },
  props: {
    work: {
      type: Object
      }
    },
    computed: {
      tags() {
        return this.work.skills.split(',')
      }
    }
    
}
</script>

<style lang="postcss" src="./work-card.pcss">
 
</style>