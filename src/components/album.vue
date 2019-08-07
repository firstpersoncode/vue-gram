<template>
  <div class="album">
    <banner title="Profile" />
    <preview
      v-if="prevPhoto && prevPhoto.url"
      :prevPhoto="prevPhoto"
      :closePreview="closePreview"
      :deletePhoto="deletePhoto" />
    <div class="album-wrapper">
      <thumb
        @preview-photo="openPreview(photo)"
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo" />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import thumb from './thumb'
  import preview from './preview'
  import banner from './banner.vue'

  export default {
    name: 'album',
    data() {
      return {
        prevPhoto: null
      }
    },
    components: {
      thumb,
      preview,
      banner
    },
    props: ['photos'],
    methods: {
      ...mapActions(['delFeed']),
      openPreview(photo) {
        this.prevPhoto = photo
      },
      closePreview() {
        this.prevPhoto = null
      },
      deletePhoto(id) {
        this.delFeed(id)
        this.closePreview()
      }
    }
  }
</script>

<style scoped>
  .album {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .album-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  }
</style>
