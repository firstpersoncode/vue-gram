<template>
  <div v-if="commentList.length" class="comment">
    <p>Comments</p>
    <ul>
      <li v-for="comment in commentList">
        {{ comment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comments",
  props: ['commentList']
}
</script>

<style>
  .comment {
    word-break: break-all;
  }
  .comment > p {
    font-size: 15px;
    color: #AAA;
  }
</style>
