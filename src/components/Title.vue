<template>
	<div>
		<div>This is Title</div>
		<button @click="getPost('home')">check res</button>
	</div>
</template>
<script>
import axios from 'axios'
const newYorkApiKey = '4dfd6d88bc06460883571aef03350a5e'
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
// const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world'
function buildUrl (section) {
  return baseUrl + section + '.json?api-key=' + newYorkApiKey
}

export default {
  name: 'Title',
  data: {
    section: 'home'
  },
  methods: {
    getPost (section) {
      let url = buildUrl(section)
      axios.get(url).then(function (res) {
        console.log(res)
      }).catch(error => { console.log(error) })
    }
  }
}
</script>
