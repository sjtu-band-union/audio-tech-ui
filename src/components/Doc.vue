<template lang="html">
  <div class="doc">
    <h2>{{filename}}</h2>
    <p v-html = "content"></p>
  </div>
</template>

<script>
import api from '@/api'
import marked from 'marked'
export default {
  name: 'doc',
  props: [
    'filename'
  ],
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.load()
  },
  watch: {
    '$route' () {
      this.load()
    }
  },
  methods: {
    load() {
      api.getMarkdown(this.filename)
      .then(
        data => {
          this.content = marked(data.data)
        }
      )
    }
  }
}
</script>

<style lang="css">
</style>
