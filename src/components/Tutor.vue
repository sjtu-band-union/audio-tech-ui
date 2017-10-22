<template lang="html">
  <div class="tutor">
    <h1>{{tutorname}}</h1>
    <router-link :to="{name: 'home'}">back to home page</router-link>
		<ol>
			<li v-for="item in list">
        <a @click.prevent="load(item)" href="#">{{item}}</a>
      </li>
		</ol>
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
	  load(file) {
		  this.$router.push({
        path: `/tutor/${this.tutorname}/${file}`
      })
		}
	}
}
</script>

<style lang="scss">
</style>
