<template lang="pug">
    #dashboard
        .dash(v-if="usuario && usuario.perfil === 'ADMIN'")
            DashAdmin
        .dash(v-if="usuario && usuario.perfil === 'CANDIDATO'")
            DashCandidato(:usuario="usuario")
</template>
<script>
import DashAdmin from "../components/DashAdmin";
import DashCandidato from "../components/DashCandidato";
import AuthStorage from "../storages/AuthStorage";

export default {
  components: {
    DashAdmin,
    DashCandidato
  },
  data() {
    return {
      usuario: null
    };
  },
  mounted() {
    this.usuario = AuthStorage.usuario;
  },
  methods: {}
};
</script>
<style lang="sass" scoped>

</style>
