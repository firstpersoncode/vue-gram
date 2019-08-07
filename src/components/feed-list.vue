<template>
  <div class="feeds">
    <banner title="Home" />
    <ul>
      <li v-for='feed in feeds' :key='feed.id'>
        <post :feed='feed' />
      </li>
    </ul>
  </div>
</template>

<script>
import post from './post.vue'
import banner from './banner.vue'

export default {
  name: 'feed-list',
  props: ['feeds'],
  components: {
    post,
    banner
  }
}
</script>

<style scoped>
.feeds {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
}

.feeds > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
