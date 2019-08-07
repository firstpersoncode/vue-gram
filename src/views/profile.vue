<template>
  <div class="profile">
    <album :photos='allFeeds' />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import album from '@/components/album.vue'

export default {
  name: 'profile',
  components: {
    album
  },
  methods: {
    ...mapActions(['fetchFeeds'])
  },
  computed: {
    ...mapGetters(['allFeeds'])
  },
  created() {
    if (!this.allFeeds.length) {
      this.fetchFeeds(9)
    }
  }
}
</script>
