import Vue from "vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        }
      }
    }

  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImage = require(`../images/content/${item.pic}`)
          .default;
        item.pic = requireImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper
      switch(direction) {
        case "next" :
          slider.slideNext();
          break;
        case "prev" :
          slider.slidePrev();
          break;
      }
    }
  },
  mounted() {

     var ref = this.$refs; 

     ref.prevBtn.style.opacity = .2;
     ref.prevBtn.style.cursor = 'initial';
   
     const activeIndex = mySwiper.clickedIndex();

     if (activeIndex == this.slides.length - 1) {
      ref.nextBtn.style.opacity = .2;
      ref.nextBtn.style.cursor = 'initial';
    } else {
      ref.nextBtn.style.opacity = 1;
      ref.nextBtn.style.cursor = 'pointer';
  }  
      
      if (activeIndex == 0) {
        ref.prevBtn.style.opacity = .2;
        ref.prevBtn.style.cursor = 'initial';
    } else {
        ref.prevBtn.style.opacity = 1;
        ref.prevBtn.style.cursor = 'pointer';
    }
     
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  }
});