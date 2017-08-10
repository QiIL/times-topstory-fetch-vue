<template>
  <div>
    <div class="container" id="app">
		<h3 class="text-center">VueNews</h3>
    <Title></Title>
		<h5 class="text-center uppercase" v-if="!loading">{{ title }}</b></h5>
		<div v-if="loading" class="loader"><img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader"></div>
    </div>
    <Hello></Hello>
		<!-- <news-list v-if="!loading" :results="results"></news-list> -->
  </div>
</template>

<script>
import Hello from '../components/Hello.vue'
import Title from '../components/Title.vue'
export default {
  components: {
    Hello,
    Title
  }
}
</script>
