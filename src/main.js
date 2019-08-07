import Vue from 'vue'
import app from './layouts/app.vue'
import store from './store'
import router from './router'
import ImageUploader from "vue-image-upload-resize"

Vue.use(ImageUploader)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app')
