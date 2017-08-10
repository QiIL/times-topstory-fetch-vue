<template>
  <div>this is hello</div>
  <!-- <section>
    <div>
      <div>
        <div>
          <div>
            {{ post.title }}
          </div>
          <a href="post.url" target="_blank"><img src="post.image_url" alt=""></a>
          <div>
            <p>{{ post.abstract }}</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
