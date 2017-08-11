<template>
	<div>
		<div>This is Title</div>
      <form>
        <div class="row">
          
          <div class="column-1">
            <select v-model="sectionName">
              <option v-for="section in sections" :key="section.id" :value="section"> {{ section }} </option>
            </select>
          </div>

          <div class="column-2">
            <a @click="getPost(sectionName)">Receive</a>
          </div>

        </div>
      </form>
    <div :results="results"></div>
	</div>
</template>
<script>
import axios from 'axios'
const newYorkApiKey = '4dfd6d88bc06460883571aef03350a5e'
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world'
function buildUrl (section) {
  return baseUrl + section + '.json?api-key=' + newYorkApiKey
}

export default {
  data () {
    return {
      results: [],
      title: '',
      aaa: 123,
      sections: SECTIONS.split(', '),
      section: 'home'
    }
  },
  methods: {
    getPost (section) {
      let url = buildUrl(section)
      axios.get(url).then(function (res) {
        console.log(this.section)
        let title = this.section !== 'home' ? 'Top stories in ' + this.section + ' today' : 'Top stories today'
        console.log(title)
        this.results = res.data.results
      }).catch(error => { console.log(error) })
    }
  }
}
</script>
