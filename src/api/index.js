import Vue from 'vue'
import axios from 'axios'
import parseMD from 'marked'

Vue.prototype.$http = axios
const root = 'static'

const api = {
  getMarkdown(fileName) {
    const path = `${root}/markdown/${fileName}.md`
    return axios.get(path)
  },
  getJSON(fileName) {
    const path = `${root}/json/${fileName}.json`
    return axios.get(path)
  }
}

export default api
