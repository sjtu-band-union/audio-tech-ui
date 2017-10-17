<template lang="html">
  <div class="page-post">
    <h1>Post</h1>
    <router-link :to="{name: 'home'}">back to home page</router-link>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'post',
  created() {
    api.getMarkdown('test')
    .then(
      data => {
        console.log(data)
      },
      () => {
        console.log('failed')
      }
    )
  },
}
</script>

<style lang="scss">
</style>
