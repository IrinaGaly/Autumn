<template>
  <div class="container">
    <nav class="navigation-content">
      <ul class="list">
        <!-- <li 
          v-for="link in links" 
          :class="['item', {activat: link.activat}]"
          :key="link.id"> 
          <a :href="`/${link.alias}`" class="link">{{link.title}}</a>
        </li> -->
        <li :class="['item']">
          <router-link class="rout-link" to="/">About</router-link>
        </li>
        <li :class="['item']">
          <router-link class="rout-link" to="/works">Works</router-link>
        </li>
        <li :class="['item']">
          <router-link class="rout-link" to="/reviews">Reviews</router-link>
        </li>
      </ul>
    </nav>
  </div> 
</template>

<script>
//  const links = [
//      {id: 0, title: "About", alias: "admin#/", activat: false },
//      {id: 1, title: "Works", alias: "admin#/works", activat: true, },
//      {id: 2, title: "Reviews", alias: "admin#/reviews", activat: false}
//   ];
 export default {
   data() {
     return {
       //links
     }
   }
 }
</script>


<style lang="postcss" scoped src="./navigation.pcss">

</style>