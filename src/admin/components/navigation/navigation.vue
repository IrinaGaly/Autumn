<template>
  <div class="container">
    <nav class="navigation-content">
      <ul class="list">
        <li 
          v-for="link in links" 
          :class="['item', {active: link.active}]"
          :key="link.id"> 
          <a :href="`/${link.alias}`" class="link">{{link.title}}</a>
        </li>
      </ul>
    </nav>
  </div> 
</template>

<script>
const links = [
    {id: 0, title: "About", alias: "about", active: false },
    {id: 1, title: "Works", alias: "works", active: true, },
    {id: 2, title: "Reviews", alias: "reviews", active: false}
  ];
export default {
  data() {
    return {
      links
    }
  }
}
</script>


<style lang="postcss" scoped src="./navigation.pcss">

</style>