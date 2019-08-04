<template lang="pug">
    #DashCandidato.container.pt-5
        .row
            .col-12.col-sm-8
                h4.mt-3 {{usuario.nome}}
                p
                    i {{usuario.email}}
                hr
                h5.mt-2 Dados Pessoais
                .pessoa(v-if="usuario.pessoa")
                    p
                        strong CPF:
                        span.ml-1 {{usuario.pessoa.documento}}
                    p
                        strong Nascimento:
                        span.ml-1 {{usuario.pessoa.dataNascimentoFormatada}}
                    p
                        strong Gênero:
                        span.ml-1 {{usuario.pessoa.genero == 'F' ? 'Feminino' : 'Masculino'}}
                    b-button(href="foto") 
                        i.fa.fa-user
                        |  Fotografia
                    b-button.ml-1(href="enderecos") 
                        i.fa.fa-address-card
                        |  Endereços
                    b-button.ml-1(href="telefones") 
                        i.fa.fa-mobile
                        |  Telefones
                .nova_pessoa(v-else) 
                    b-button(variant="primary" href="pessoa") Informar Dados Pessoais
                hr
                h5.mt-2(v-if="usuario.pessoa") Dados do Profissionais
                .candidato(v-if="usuario.pessoa && usuario.pessoa.candidato")
                    b-button(variant="primary" href="cursos") Formações
                    b-button.ml-1(variant="primary" href="experiencias") Experiências
                .novo_candidato(v-else-if="usuario.pessoa") 
                    b-button(variant="primary" href="candidato") Informar Dados Profissionais
            .col-12.col-sm-4
                NavCandidato    
</template>
<script>
import NavCandidato from './NavCandidato'
export default {
    components: {
        NavCandidato
    },
    props: ["usuario"]
};
</script>
<style lang="sass">

</style>
