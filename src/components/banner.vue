<template>
  <h1 class="banner">{{ title }}</h1>
</template>

<script>
export default {
  name: "banner",
  props: ['title']
}
</script>

<style>
.banner {
  margin: 0;
  text-align: center;
  padding: 15px;
  background-color: #000;
  color: #FFF;
}
</style>
