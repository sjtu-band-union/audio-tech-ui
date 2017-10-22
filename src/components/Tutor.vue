<template lang="html">
  <div class="tutor">
    <h1>{{tutorname}}</h1>
    <router-link :to="{name: 'home'}">回到主页</router-link>
		<ol>
			<li v-for="(item, idx) in list">
        <a @click.prevent="load(idx)" href="#">{{item.name}}</a>
      </li>
		</ol>
    <a v-if="fileIdx > 0" @click.prevent="load(fileIdx - 1)" href="#">上一篇</a>
    <a v-if="fileIdx < list.length - 1" @click.prevent="load(fileIdx + 1)" href="#">下一篇</a>
    <router-view/>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'tutor',
  props: [
    'tutorname'
  ],
  data() {
    return {
      content: '',
      list: [],
      fileIdx: undefined
    }
  },
  created() {
    api.getJSON(`${this.tutorname}_dir`)
    .then(
      data => {
        this.list = data.data
      }
    )
  },
  methods: {
    load(idx) {
      this.$router.push({
        name: 'doc',
        params: {
          tutorname: this.tutorname,
          filename: this.list[idx].file
        }
      })
      this.fileIdx = idx
    }
  }
}
</script>

<style lang="scss">
</style>
