export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
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
    }
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
    }
  }
}