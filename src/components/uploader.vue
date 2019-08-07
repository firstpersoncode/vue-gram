<template>
  <div class="uploader">
    <image-uploader
      :preview="true"
      :className="['fileInput', { 'fileInput--loaded': hasImage }]"
      capture="environment"
      :debug="1"
      doNotResize="gif"
      :autoRotate="true"
      outputFormat="verbose"
      @input="setImage"
    >
      <label class="label" for="fileInput" slot="upload-label">
        <!-- <button> -->
          <figure class="figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              ></path>
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        <!-- </button> -->
      </label>
    </image-uploader>
    <div class="action" v-if="hasImage">
      <input v-model="title" placeholder="Set caption">
      <button @click="submit({ url: image.dataUrl, title })">Upload</button>
    </div>
    <br />
    <button @click="$emit('toggle-uploader')">Cancel</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'uploader',
  data() {
    return {
      hasImage: false,
      image: null,
      title: ''
    }
  },
  methods: {
    ...mapActions(['postFeed']),
    setImage(output) {
      this.hasImage = true
      this.image = output
    },
    deletePreview() {
      this.hasImage = false
      this.image = null
      this.title = ''
    },
    async submit(feed) {
      this.deletePreview()
      await this.postFeed(feed)
      this.$emit('toggle-uploader')
    }
  }
}
</script>

<style scoped>

.uploader {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: #FFF;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

.action > button {
  width: 100%;
}

.action > input {
  width: 100%;
  padding: 15px;
  margin: 15px 0;
}

.figure {
  margin: 0;
}

.label {
  cursor: pointer;
}
</style>
