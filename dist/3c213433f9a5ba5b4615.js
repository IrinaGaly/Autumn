(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,r){},125:function(e,t,r){},126:function(e,t,r){},136:function(e,t,r){"use strict";var i=r(124);r.n(i).a},137:function(e,t,r){"use strict";var i=r(125);r.n(i).a},138:function(e,t,r){"use strict";var i=r(126);r.n(i).a},140:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return $}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews-componets"},[r("div",{staticClass:"page-content"},[r("div",{staticClass:"container"},[e._m(0),e._v(" "),!0===e.formIsShown?r("reviewForm",{attrs:{review:e.review},on:{reset:function(t){e.resetHandler=!1},submit:e.submitForm,"edit-review":e.editReview,closeForm:e.closeForm}}):e._e(),e._v(" "),r("ul",{staticClass:"reviews-list"},[r("li",{staticClass:"review-item"},[r("square-btn",{attrs:{type:"square",title:"Добавить отзыв"},on:{click:function(t){e.formIsShown=!0}}})],1),e._v(" "),e._l(e.reviews,(function(t){return r("li",{key:t.id,staticClass:"review-item"},[r("reviewCard",{attrs:{review:t},on:{"remove-review":function(r){return e.removeReview(t.id)},"edit-review":e.editReview}})],1)}))],2)],1)])])};i._withStripped=!0;var n=r(0),o=r.n(n),a=r(2),s=r.n(a),c=r(6),v=r.n(c),w=r(10),l=r(74),u=r(75),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-card",attrs:{review:e.review}},[r("div",{staticClass:"preview"},[r("img",{staticClass:"picture",attrs:{src:e.correctReview}}),e._v(" "),r("div",{staticClass:"preview-content"},[r("h4",{staticClass:"review-name"},[e._v(e._s(e.review.author))]),e._v(" "),r("p",{staticClass:"review-occ"},[e._v(e._s(e.review.occ))])])]),e._v(" "),r("div",{staticClass:"desc"},[r("p",{staticClass:"text"},[e._v(e._s(e.review.text))]),e._v(" "),r("div",{staticClass:"review-btn"},[r("icon",{staticClass:"pencil",attrs:{symbol:"pencil",title:"Править"},on:{click:e.handleEdit}}),e._v(" "),r("icon",{attrs:{symbol:"cross",title:"Удалить"},on:{click:e.handleRemove}})],1)])])};p._withStripped=!0;var d={components:{icon:r(32).default},props:{review:{type:Object}},methods:{handleRemove:function(){this.$emit("remove-review")},handleEdit:function(){this.$emit("edit-review",this.review),console.log(this.review)}},computed:{correctReview:function(){return"https://webdev-api.loftschool.com/".concat(this.review.photo)}}},f=(r(136),r(1)),h=Object(f.a)(d,p,[],!1,null,"1beb474a",null);h.options.__file="src/admin/components/review-card/review-card.vue";var m=h.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-reviews-compomnent"},[r("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("card",{staticClass:"edit-work",attrs:{title:"Новый отзыв"}},[r("div",{staticClass:"form-content",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"info"},[r("div",{staticClass:"info-wrap"},[r("div",{staticClass:"review-col"},[r("label",{staticClass:"upload-container",class:["upload",{active:e.newReview.preview}],style:{backgroundImage:"url("+e.preview+")"},on:{dragover:e.handleDragOver,drop:e.handleChange}},[r("div",{staticClass:"work-input"},[r("div",{staticClass:"btn-wrap"},[r("appButton",{attrs:{plain:"",typeAttr:"file",title:"Добавить фотографию"},on:{change:e.handleChange}})],1)])])]),e._v(" "),r("div",{staticClass:"review-container"},[r("app-input",{staticClass:"name-input",attrs:{title:"Имя автора",errorMessage:e.validation.firstError("newReview.author")},model:{value:e.newReview.author,callback:function(t){e.$set(e.newReview,"author",t)},expression:"newReview.author"}}),e._v(" "),r("app-input",{staticClass:"occ-input",attrs:{title:"Титул автора",errorMessage:e.validation.firstError("newReview.occ")},model:{value:e.newReview.occ,callback:function(t){e.$set(e.newReview,"occ",t)},expression:"newReview.occ"}}),e._v(" "),r("app-input",{attrs:{title:"Отзыв",fieldType:"textarea",errorMessage:e.validation.firstError("newReview.text")},model:{value:e.newReview.text,callback:function(t){e.$set(e.newReview,"text",t)},expression:"newReview.text"}})],1)]),e._v(" "),r("div",{staticClass:"add-info-btns"},[r("appButton",{attrs:{plain:"",title:"Отмена"},on:{click:function(t){return e.$emit("closeForm")}}}),e._v(" "),r("appButton",{attrs:{typeAttr:"submit",title:"СОХРАНИТЬ"}})],1)])])])],1)])};b._withStripped=!0;r(46);var O=r(72),R=r(73),_=r(71),C=r(7),y=r(9);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){v()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={mixins:[r(7).mixin],validators:{"newReview.author":function(e){return C.Validator.value(e).required("Обязательно")},"newReview.occ":function(e){return C.Validator.value(e).required("Обязательно")},"newReview.text":function(e){return C.Validator.value(e).required("Обязательно")},preview:function(e){return C.Validator.value(e).required("Обязательно для загрузки")}},components:{card:R.a,appButton:_.a,appInput:O.a,button:_.a},props:{review:{type:Object},shownForm:{type:Boolean}},created:function(){this.review&&(this.newReview=j({},this.review),this.preview="https://webdev-api.loftschool.com/".concat(this.review.photo))},data:function(){return{preview:"",newReview:{author:"",occ:"",photo:{},text:""}}},methods:j(j({},Object(y.b)({addNewReview:"reviews/add",editReview:"reviews/edit"})),{},{handleSubmit:function(){var e=this;return s()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.newReview.id){t.next=5;break}return t.next=3,e.editReview(e.newReview);case 3:t.next=8;break;case 5:return t.next=7,e.addNewReview(e.newReview);case 7:e.newReview.preview="",e.newReview="";case 8:e.$emit("submit");case 9:case"end":return t.stop()}}),t)})))()},handleChange:function(e){e.preventDefault();var t=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0];this.newReview.photo=t,this.renderPhoto(t)},handleDragOver:function(e){e.preventDefault()},renderPhoto:function(e){var t=this,r=new FileReader;r.readAsDataURL(e),r.onloadend=function(){t.newReview.preview=r.result},r.onerror=function(){t.showTooltip({text:error.response.data.error,type:"error"})},r.onabort=function(){t.showTooltip({text:error.response.data.error,type:"error"})}}})},k=(r(137),Object(f.a)(x,b,[],!1,null,"ede31c54",null));k.options.__file="src/admin/components/reviewForm/review-form.vue";var P=k.exports;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){v()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={components:{iconedButton:w.a,category:l.a,reviewCard:m,tagsAdder:u.a,squareBtn:w.a,reviewForm:P},data:function(){return{formIsShown:!1,review:{},preview:{}}},computed:S({},Object(y.c)("reviews",{reviews:function(e){return e.data}})),methods:S(S({},Object(y.b)({fetchReviewAction:"reviews/fetch",removeReviewAction:"reviews/remove"})),{},{closeForm:function(){this.formIsShown=!1},removeReview:function(e){var t=this;return s()(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.removeReviewAction(e);case 2:case"end":return r.stop()}}),r)})))()},submitForm:function(){this.review=""},editReview:function(e){this.formIsShown=!0,this.review=e}}),created:function(){this.fetchReviewAction()}},F=(r(138),Object(f.a)(E,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("h1",{staticClass:"section-name"},[this._v("Блок «Отзывы»")])])}],!1,null,"2c7c3bd3",null));F.options.__file="src/admin/pages/reviews/reviews.vue";var $=F.exports}}]);