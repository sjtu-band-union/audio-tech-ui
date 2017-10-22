<template lang="html">
  <div class="page-home">
    <h1>Home</h1>
    <ul>
      <li><router-link :to="{ path: '/tutor/live' }">Live</router-link></li>
      <li><router-link :to="{ path: '/tutor/post' }">Post</router-link></li>
      <li><router-link :to="{name: 'resources'}">Resources</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style lang="scss">
</style>
