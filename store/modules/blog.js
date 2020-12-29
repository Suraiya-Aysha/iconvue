import axios from 'axios'

const state = {
  blogs: {}
}
// getters
const getters = {
  allBlog: (state) => state.blogs
}
// mutations
const mutations = {
  SET_BLOGS: (state,blogs) => (state.blogs = blogs),
}
// actions
const actions = {
  async getBlogs({commit}) {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    commit('SET_BLOGS', response.data.data)
    console.log(this.response);
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}