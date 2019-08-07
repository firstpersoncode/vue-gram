<template>
  <div class="home">
    <feedList :feeds='allFeeds'/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import feedList from '@/components/feed-list.vue'

export default {
  name: 'home',
  components: {
    feedList
  },
  methods: {
    ...mapActions(['fetchFeeds'])
  },
  computed: {
    ...mapGetters(['allFeeds'])
  },
  created() {
    if (!this.allFeeds.length) {
      this.fetchFeeds()
    }
  }
}
</script>
