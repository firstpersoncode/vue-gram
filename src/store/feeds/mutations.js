const mutations = {
  setFeeds: (state, feeds) => {
    if (feeds.length) {
      state.feeds = feeds.map(post => {
        post = {
          ...post,
          timeStamp: new Date(),
          liked: false,
          comments: []
        }

        return post
      })
    }
  },
  addFeed: (state, feed) => {
    feed = {
      ...feed,
      id: Math.random() * (6000 - 5001) + 5001,
      timeStamp: new Date(),
      liked: false,
      comments: []
    }

    if (state.feeds.length) {
      state.feeds = [
        feed,
        ...state.feeds
      ]
    } else {
      state.feeds = [feed]
    }
  },
  delFeed: (state, id) => {
    state.feeds = state.feeds.filter(post => post.id !== id)
  },
  likePost: (state, id) => {
    const indexSelected = state.feeds.findIndex(post => post.id === id)
    if (indexSelected > -1) {
      let selectedPost = state.feeds[indexSelected]
      selectedPost.liked = !selectedPost.liked
      state.feeds.splice(indexSelected, 1, selectedPost)
    }
  },
  commentFeed: (state, { id, newComment }) => {
    const indexSelected = state.feeds.findIndex(post => post.id === id)
    if (indexSelected > -1) {
      let selectedPost = state.feeds[indexSelected]
      selectedPost.comments = [
        newComment,
        ...selectedPost.comments
      ]
      state.feeds.splice(indexSelected, 1, selectedPost)
    }
  },
  setLoading: (state, status) => {
    state.loading = status
  }
}

export default mutations
