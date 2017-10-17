<template lang="html">
  <div class="page-live">
    <h1>{{flag}}</h1>
    <router-link :to="{name: 'home'}">back to home page</router-link>
		<ol>
			<li v-for="item in list" @click="load(item)">{{item}}</li>
		</ol>
		<div class="markdown" v-html="content"></div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'tutor',
	props: [
		'flag'
	],
	data() {
    return {
      content: '',
			list: [],
    }
  },
  created() {
		api.getJSON(`${this.flag}_dir`)
		.then(
			data => {
				this.list = data
			}
		)
		const file = this.$route.params.file;
		if (file) {
			api.getMarkdown(`${this.flag}/${this.$router}`)
			.then(
				data => {
					this.content = data
				},
				error => {
					
				}
			)
		}
	},
	methods: {
	  load(file) {
		  this.$router.push({
				name: this.flag,
				params: {
					file,
				}
			})
		}
	}
}
</script>

<style lang="scss">
</style>
