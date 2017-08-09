<template>
  <div>
    <div @click="$router.back()">Hello2</div>
    <hello ref="test"></hello>
    <div @click="test">ggg</div>
  </div>
</template>
 
<script>
import Hello from './Hello.vue'
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
