<template lang="pug">
    header
        b-navbar.fixed-top(toggleable="lg" type="dark" variant="primary")
            .container
                b-navbar-brand(href="/dashboard")
                    i.fa.fa-user-tie.text-white
                    |  Talentos
                b-navbar-toggle(target="nav-collapse")
                b-collapse#nav-collapse(is-nav="")
                    b-navbar-nav
                        .menu(v-if="getMenu() === 'ADMIN'")
                            MenuAdmin
                        .menu(v-if="getMenu() === 'CANDIDATO'")
                            MenuCandidato

                    b-navbar-nav.ml-auto
                        b-nav-item(@click="logout") Sair
</template>

<script>
import AuthStorage from "../storages/AuthStorage";
import MenuCandidato from "./MenuCandidato"
import MenuAdmin from "./MenuAdmin"
export default {
    components: {
        MenuCandidato,
        MenuAdmin,
    },
  methods: {
    logout() {
      AuthStorage.logout();
      this.$router.push({ name: "home" });
    },
    getMenu() {
        return AuthStorage.usuario.perfil;
    }
  }
};
</script>
