<template>
  <div id="app">
    <router-view/>
    <navFooter @toggle-uploader="toggleUploader" />
    <uploader v-if="upload" @toggle-uploader="toggleUploader" />
    <loading v-if="isLoading" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import navFooter from '@/components/nav-footer.vue'
import uploader from '@/components/uploader.vue'
import loading from '@/components/loading.vue'

export default {
  name: 'app',
  data() {
    return {
      upload: false
    }
  },
  methods: {
    toggleUploader() {
      this.upload = !this.upload
    }
  },
  components: {
    navFooter,
    uploader,
    loading
  },
  computed: mapGetters(['isLoading'])
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
}

button {
  border: none;
  padding: 15px;
  margin-right: 5px;
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 200px;
}
/* disable input for image uploader */
#fileInput {
  display: none;
}
</style>
