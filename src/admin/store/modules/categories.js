export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
    DELETE_CATEGORY: (state, categoryToRemove) => {
      state.data = state.data.filter((category) => {
        return category.id !== categoryToRemove;
      })
    },

    // EDIT_CATEGORY(state, edCategory) {state.data.forEach((category) => {
    //   if(category.id === edCategory.category.id) {
    //     //category.category = edCategory.category.category;
    //     console.log('ok')
    //   }
    // });
  },
    ADD_SKILL: (state, newSkill) => {
      // перебираем массив с категориями и формировать новый массив и в него складывать скиллы
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map(category => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(skill => skill.id !== skillToRemove.id)
          // проходимся по массиву и создаем новый, без удаленного
        }
        return category;
      })
    },
    EDIT_SKILL: (state, skillToEdit)  => {
      //в найденных котегориях генерируем новый массив с изменюкатегориями
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === skillToEdit.id ? skillToEdit : skill
          // если айди совпал, вернем изменненный скилл иначе - обычный
        });
      }
      const findCategory = category => {
        if (category.id === skillToEdit.category) {
          editSkillInCategory(category);
        }

        return category;
      }
      state.data = state.data.map(findCategory);
    },
    EDIT_CATEGORY(state, editCategory) {state.data.forEach((category) => {
      if(category.id === editCategory.category.id) {
        category.category = editCategory.category.category;
      }
    });
  },

  actions: {
    async create({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title })
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error("произошла ошибка");
      }
    },
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get('/categories/374')
        commit("SET_CATEGORIES", data)
      } catch (error) {
        console.log(error);
      }
    },
    async edit({ commit }, editCategory) {
      try {
        const { data } = await this.$axios.post(`/categories/${editCategory.id}`, {title: editCategory.title});
        commit("EDIT_CATEGORY", data);
      } catch (error) {
        throw new Error("ошибка");
      }
      return true;
    },
    async delete({ commit }, categoryToRemove) {
      try {
        const { data } = await this.$axios.delete(`/categories/${categoryToRemove}`);
        commit("DELETE_CATEGORY", categoryToRemove);
      } catch (error) {
        console.log(error);
        throw new Error("Произошла ошибка");
      }
    },
  }
}