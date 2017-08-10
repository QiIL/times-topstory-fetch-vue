<template>
  <div class="container" id="app">
		<h3 class="text-center">VueNews</h3>
    <Title></Title>
    <newsList :results="results"></newsList>
  </div>
</template>

<script>
import NewsList from '../components/NewsList'
import Title from '../components/Title'
export default {
  components: {
    NewsList,
    Title
  }
}
</script>
