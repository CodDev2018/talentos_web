<template lang="pug">
    b-nav-item-dropdown(text="Cadastros")
            b-dropdown-item(href="/usuario") Dados de Acesso

            b-dropdown-item(href="/pessoa") Dados Pessoais
                b-dropdown-item(v-if="pessoaId" href="/enderecos") Endereços
                b-dropdown-item(v-if="pessoaId" href="/telefones") Telefones

            b-dropdown-item(v-if="pessoaId" href="/candidato") Dados Profissionais
                b-dropdown-item(v-if="candidatoId" href="/cursos") Formações
                b-dropdown-item(v-if="candidatoId" href="/experiencias") Experiências
</template>
<script>
import AuthStorage from "../storages/AuthStorage";

export default {
  props: ["active"],
  data() {
    return {
      usuario: null,
      pessoaId: null,
      candidatoId: null
    };
  },
  mounted() {
    try {
      this.usuario = AuthStorage.usuario;
      this.pessoaId = AuthStorage.pessoaId;
      this.candidatoId = AuthStorage.candidatoId;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
