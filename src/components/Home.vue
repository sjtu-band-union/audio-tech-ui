<template lang="html">
  <div class="page-home">
    <h1>Home</h1>
    <ul>
      <li><router-link :to="{ path: '/tutor/live' }">现场音频技术</router-link></li>
      <li><router-link :to="{ path: '/tutor/post' }">后期音频技术</router-link></li>
      <li><router-link :to="{name: 'resources'}">音频相关资源</router-link></li>
      <li><router-link :to="{name: 'about'}">关于乐联</router-link></li>
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
