<template lang="pug">
  #app
    .vh-100(v-if="isAuthenticated()")
      NavPrivate
      router-view
    
    .vh-100(v-else)
      NavPublic
      router-view

    MyFooter
</template>
<script>
import NavPublic from "./components/NavPublic";
import NavPrivate from "./components/NavPrivate";
import MyFooter from "./components/MyFooter";
import AuthStorage from "./storages/AuthStorage";

export default {
  components: {
    NavPublic,
    NavPrivate,
    MyFooter
  },
  methods: {
    isAuthenticated() {
      return AuthStorage.usuario;
    }
  }
};
</script>

<style lang="scss">
</style>
