<template lang="html">
  <div class="page-post">
    <h1>Post</h1>
    <router-link :to="{name: 'home'}">back to home page</router-link>
    <div class="markdown" v-html="content">
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'post',
  data() {
    return {
      content: '',
    }
  },
  created() {
    api.getMarkdown('111')
    .then(
      data => {
        this.content = data;
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
