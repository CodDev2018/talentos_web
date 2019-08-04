<template lang="pug">
    #pessoaForm.container.h-100.pt-5
        .d-flex.flex-column.h-100
            .row
                .col-12.col-sm-8
                    b-card.mt-3(titel="Dados Pessoais")
                        b-form(@submit.prevent="onSubmit", v-if="pessoa")
                            b-form-group(id="input-grupo-documento", label="CPF:", 
                                label-for="input-documento")
                                b-form-input(id="input-documento", v-model="pessoa.documento",
                                v-mask="['###.###.###-##']", type="text", required, placeholder="123.456.789-00")

                            b-form-group(id="input-grupo-nascimento", label="Data de Nascimento:", 
                                label-for="input-nascimento")
                                b-form-input(id="input-nascimento", v-model="pessoa.dataNascimentoFormatada",
                                v-mask="['##/##/####']", type="text", required, placeholder="01/01/2000")
                            
                            b-form-group(id="input-grupo-genero", label="Gênero:")
                                b-form-radio-group(id="btn-radio-genero", v-model="pessoa.genero", :options="generos", 
                                    buttons, name="radio-btn-genero")
                            hr
                            b-button.float-right.ml-1(type="submit", variant="primary") Salvar
                            b-button.float-right(type="button", variant="danger", href="dashboard") Cancelar
                .col-12.col-sm-4
                    NavCandidato(active="pessoa")
</template>
<script>
import NavCandidato from "../components/NavCandidato";
import PessoaResource from "../resources/PessoaResource";
import UserResource from "../resources/UserResource";
import AuthStorage from "../storages/AuthStorage";

export default {
  components: {
    NavCandidato
  },
  data() {
    return {
      pessoaId: null,
      pessoa: {
        documento: null,
        dataNascimentoFormatada: null,
        dataNascimento: null,
        genero: null,
        tipo: "F"
      },
      generos: [
        { text: "Masculino", value: "M" },
        { text: "Feminino", value: "F" }
      ]
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.pessoa = await PessoaResource.save(this.pessoa);
        this.usuario = await UserResource.getById(AuthStorage.usuario.id);
        AuthStorage.usuario = this.usuario;
        this.$swal(
          "Successo",
          "Dados Pessoais salvos com sucesso!",
          "success"
        ).then(() => this.$router.push("/dashboard"));
      } catch (error) {
        console.error(error);
        this.$swal(
          "Error",
          "Não foi possivel salvar os Dados Pessoais",
          "error"
        );
      }
    }
  },
  async mounted() {
    try {
      this.pessoaId = AuthStorage.pessoaId;
      if (this.pessoaId) {
          this.pessoa = await PessoaResource.getById(this.pessoaId)
      }
    } catch (error) {
        console.error(error)
        this.$swal(
          "Error",
          "Não foi possivel recuperar os Dodos Pessoais",
          "error"
        );
    }
  }
};
</script>
<style lang="sass">

</style>
