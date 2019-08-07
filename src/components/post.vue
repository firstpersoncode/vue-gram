<template>
  <div class="post">
    <h3 v-if="feed.liked">Liked</h3>
    <img @dblclick="likePost(feed.id)" :src="feed.url" :alt='feed.url'>
    <div>
      <button
        :class='{ liked: feed.liked }'
        @click="likePost(feed.id)">
        {{ feed.liked ? 'Liked' : 'Like' }}
      </button>
      <button @click="toggleComment">Comment</button>
      <button disabled>Share</button>
    </div>
    <i>{{ feed.timeStamp }}</i>
    <form class="comment-form" v-if="isComment">
      <input v-model="newComment">
      <button @click="submitComment(feed.id)">Submit</button>
    </form>
    <p>{{ feed.title }}</p>
    <comments :commentList="feed.comments" />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import comments from './comments'

  export default {
    name: 'post',
    props: ['feed'],
    components: {
      comments
    },
    data() {
      return {
        newComment: '',
        isComment: false
      }
    },
    methods: {
      ...mapActions(['likePost', 'commentPost']),
      toggleComment() {
        this.isComment = !this.isComment
      },
      submitComment(id) {
        if (this.newComment) {
          this.commentPost({ id, newComment: this.newComment })
          this.newComment = ''
        }
        this.toggleComment()
      }
    }
  }
</script>

<style scoped>
  .post {
    position: relative;
    margin-bottom: 30px;
  }

  .post, .post > img {
    width: 100%;
  }

  .post p {
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .post i {
    font-size: 10px;
    color: #AAA;
  }

  .liked {
    background: #000;
    color: #FFF;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 25px;
    margin-left: -50px;
    margin-top: -12px;
    text-align: center;
  }

  .comment-form > input {
    width: 100%;
    padding: 15px;
  }
</style>
