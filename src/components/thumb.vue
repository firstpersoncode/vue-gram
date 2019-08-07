<template>
  <img
    @click="$emit('preview-photo', photo)"
    class="thumb"
    :src="photo.thumbnailUrl || photo.url"
    :alt="photo.id">
</template>

<script>
export default {
  name: "thumb",
  props: ['photo']
}
</script>

<style scoped>
.thumb {
  width: 100%;
}
</style>
