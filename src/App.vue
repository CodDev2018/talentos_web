<template lang="pug">
  #app
    .vh-100
      NavPublic
      router-view
    MyFooter
</template>
<script>
import NavPublic from "./components/NavPublic"
import MyFooter from "./components/MyFooter"

export default {
  components: {
    NavPublic,
    MyFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
