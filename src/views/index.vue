<template>
  <div>
    <img src="../assets/logo.png">
    <hello ref="test"></hello>
    <div @click="test">ggg</div>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue'

export default {
  methods: {
    test () {
      console.log(this.$refs.test)
    }
  },
  components: {
    Hello
  }
}
</script>
