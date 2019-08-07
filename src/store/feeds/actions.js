import axios from 'axios'

const actions = {
  async fetchFeeds({ commit }, limit = 20) {
    commit('setLoading', true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=' + limit)

    commit('setFeeds', res.data)
    commit('setLoading', false)
  },
  async postFeed({ commit }, feed) {
    commit('setLoading', true)
    const res = await axios.post('https://jsonplaceholder.typicode.com/photos', feed)
    commit('addFeed', res.data)
    commit('setLoading', false)
  },
  delFeed({ commit }, id) {
    commit('setLoading', true)
    // const res = await axios.delete('https://jsonplaceholder.typicode.com/photos/' + id)
    commit('delFeed', id)
    commit('setLoading', false)
  },
  likePost({ commit }, id) {
    commit('likePost', id)
  },
  commentPost({ commit }, feed) {
    commit('commentFeed', feed)
  }
}

export default actions
