<template>
  <div class="preview">
    <div class="action">
      <button @click="deletePhoto(prevPhoto.id)" class="delete">Delete</button>
      <button @click="closePreview">Close</button>
    </div>
    <post :feed="prevPhoto" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import post from './post'

export default {
  name: "preview",
  props: ['prevPhoto', "closePreview", "deletePhoto"],
  methods: mapActions(['likePost']),
  components: {
    post
  }
}
</script>

<style scoped>
.preview {
  padding: 15px;
  max-width: 600px;
  position: fixed;
  margin: 0 auto;
  top: 0; left: 0; bottom: 0; right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 100px;
  background: #FFF;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

.action {
  position: sticky;
  top: 0;
  z-index: 99;
  text-align: right;
  margin-right: -5px;
}
</style>
