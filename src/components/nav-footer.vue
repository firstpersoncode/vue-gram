<template>
  <div class="nav">
    <router-link to="/">
      <button>Home</button>
    </router-link>
    <div @click="$emit('toggle-uploader')">
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
    </div>
    <router-link to="/profile">
      <button>Profile</button>
    </router-link>
    <!-- <button>
      <router-link to="/about">About</router-link>
    </button> -->
  </div>
</template>

<script>

export default {
  name: 'nav-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}

.nav a {
  text-decoration: none;
}

.figure {
  margin: 0;
}
</style>
