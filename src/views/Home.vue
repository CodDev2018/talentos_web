<template lang="pug">
  #home.vh-100.pt-5
    b-jumbotron(bg-varint="white" text-variant="dark" border-variant="white")
      template(slot="header")
        .text-center
          i.fa.fa-user-tie.fa-3x.text-info
      template(slot="lead")
        .text-center Revele seus Talentos!
      hr.my-4
      .text-center
        p Faça parte deste banco de dados dos profissionais mais talentosos.
        b-button(variant="primary" href="login") Entrar
        b-button.ml-1(variant="warning" href="register") Cadastrar-se
</template>

<script>
export default {
  name: 'home',
  components: {

  }
}
</script>
