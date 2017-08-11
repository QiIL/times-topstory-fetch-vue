<template>
  <div class="container" id="app">
		<h3 class="text-center">VueNews</h3>
    <TitleList></TitleList>
    <newsList></newsList>
  </div>
</template>

<script>
import NewsList from '../components/NewsList'
import TitleList from '../components/TitleList'
export default {
  components: {
    NewsList,
    TitleList
  }
}
</script>
