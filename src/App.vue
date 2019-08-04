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
</style>
