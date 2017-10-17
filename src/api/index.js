import Vue from 'vue'
import VueResource from 'vue-resource'
import parseMD from 'marked'
import parseJSON from './json-parser.js'

Vue.use(VueResource)
const GET = (url, preProcess) => ({
  then(success, fail) {
    const root = 'static'
    Vue.http.get(`${root}/${url}`)
    .then(response => {
      success(preProcess(response.bodyText))
    }, response => {
      fail(response)
    })
  }
})

const api = {
  getMarkdown(fileName) {
    return GET(`markdown/${fileName}.md`, parseMD)
  },
  getJSON(fileName) {
    return GET(`json/${fileName}.json`, parseJSON)
  }
}

export default api
