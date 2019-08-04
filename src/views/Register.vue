<template lang="pug">
    .container-fl.pt-5
        b-form.col-12.form-sing.pt-5(@submit.prevent='onSubmit')
            p
                i.fa.fa-user-tie.text-info.fa-5x
            h1.h3.mb-3.font-weight-normal Novo Usuário
            b-alert.text-left(:show='loginError.show' dismissible='' :variant='loginError.severity') {{loginError.message}}
            
            b-form-input#inputName(v-model='form.nome' type='text' required='' placeholder='Seu nome completo...')
            b-form-input#inputEmail(v-model='form.email' type='email' required='' placeholder='Seu email...')
            b-form-input#inputPassword(v-model='form.senha' type='password' required='' placeholder='Sua senha...')
            
            b-button.btn-block.mt-2(type='submit' variant='primary') Enviar
</template>
<script>
import UserResource from "../resources/UserResource";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      loginError: {
        show: false,
        severity: "danger",
        message: ""
      },
      form: {
        nome: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      try {
        await UserResource.save(this.form);
        this.loginError.show = true;
        this.loginError.severity = "success";
        this.loginError.message = "Cadastro efetuado com sucesso. Redirecionando para login...";
        setTimeout(() => this.$router.push('/login'), 3000);
      } catch (error) {
        this.loginError.show = true;
        this.loginError.message = error.message;
      }
    }
  }
};
</script>
<style lang="sass">
    .form-sing 
        margin: 0 auto
        width: 100vw
        max-width: 330px
        text-align: center

        input[type="email"] 
            border-bottom-left-radius: 0
            border-bottom-right-radius: 0

        .form-sing input[type="password"] 
            border-top-left-radius: 0;
            border-top-right-radius: 0;
</style>
