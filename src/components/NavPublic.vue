<template lang="pug">
    header
        b-navbar.fixed-top(toggleable="lg" type="dark" variant="primary")
            .container
                b-navbar-brand(href="/")
                    i.fa.fa-user-tie.text-white
                    |  Talentos
                b-navbar-toggle(target="nav-collapse")
                b-collapse#nav-collapse(is-nav="")
                    b-navbar-nav
                        b-nav-item(href="login") Entrar
                        b-nav-item(href="register") Cadastrar-se

</template>