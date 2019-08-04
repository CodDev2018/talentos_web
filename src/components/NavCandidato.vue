<template lang="pug">
    b-card.mt-3(title="Cadastros")
        b-nav
            b-nav-item(href="/usuario", class="w-100", :disabled="active === 'usuario'") Dados de Acesso

            b-nav-item(href="/pessoa", class="w-100", :disabled="active === 'pessoa'") Dados Pessoais
                b-nav-item(v-if="pessoaId" href="/enderecos", class="w-100", :disabled="active === 'enderecos'") Endereços
                b-nav-item(v-if="pessoaId" href="/telefones", class="w-100", :disabled="active === 'telefones'") Telefones

            b-nav-item(v-if="pessoaId" href="/candidato", class="w-100", :disabled="active === 'candidato'") Dados Profissionais
                b-nav-item(v-if="candidatoId" href="/cursos", class="w-100", :disabled="active === 'cursos'") Formações
                b-nav-item(v-if="candidatoId" href="/experiencias", class="w-100", :disabled="active === 'experiencias'") Experiências
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
