import mutations from './mutations'
import actions from './actions'

const state = {
  feeds: [],
  loading: false
}

const getters = {
  allFeeds: state => state.feeds,
  isLoading: state => state.loading
}

export default {
  state,
  getters,
  mutations,
  actions
}
