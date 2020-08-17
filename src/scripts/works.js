import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs"
};

const btns = {
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works", "currentIndex"],
  template: "#preview-display",
  components: {thumbs, btns},
   computed: {
     reversedWorks() {
       const works = [...this.works];
       return works.slice(0, 3);
     },
   },
};

const tags = {
  props: ["tags"],
  template: "#preview-tags",
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {tags},
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: {display, info},
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[0];
    }
  },
   watch: {
     // следим за currentIndex и применяем метод бесконечности
     currentIndex(value) {
       this.makeInfiniteLoopForNdx(value);
     }
   },
   methods: {
     // метод, с помощью которого делаем круговое переклчение слайдов 
     makeInfiniteLoopForNdx(index) {
       const worksNumber = this.works.length - 1;
       if (index < 0) this.currentIndex = worksNumber;
       if (index > worksNumber) this.currentIndex = 0;
     },
    //метод указывющий на путь к картинке из JSON
    requireImagesToArray(data) {
      // название метода с переданным аргументом data
      return data.map(item => {
        // возвращает массив с измененными данными
        const requireImage = require(`../images/content/${item.photo}`)
          .default; //  объявляем путь к картинке понятный webpack
        item.photo = requireImage; //присваиваем новое значение айтему
        return item;
      });
    },

  slide(direction) {
    const lastItem = this.works[this.works.length - 1];
    switch(direction) {
      case "next":
        this.works.push(this.works[0]);
        this.works.shift();
        this.currentIndex++
        break;
      case "prev":
        this.works.unshift(lastItem);
        this.works.pop();
        this.currentIndex--
        break;
    }
  },
    changeThumb(e) {
      console.log("click");
    }
},
  created() {
    // объявление переменно с данными из JSON
    const data = require("../data/works.json"); //путь к JSON
    this.works = this.requireImagesToArray(data); // присваивание пустому массиву данные массива из метода requireImagesToArray
  },
});