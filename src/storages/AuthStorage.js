import moment from "moment"

class AuthStorage {
    set usuario(usuario) {
        sessionStorage.usuario = JSON.stringify(usuario)
    }

    set token(token) {
        sessionStorage.token = token
    }

    get usuario() {
        if (!sessionStorage.usuario) return null

        let usuario = JSON.parse(sessionStorage.usuario)
        if (usuario.pessoa) {
            usuario.pessoa.dataNascimentoFormatada = moment(usuario.pessoa.dataNascimento).format('DD/MM/YYYY')
        }

        return usuario
    }

    get token() {
        return sessionStorage.token
    }

    get pessoaId() {
        return this.usuario && this.usuario.pessoa ? this.usuario.pessoa.id : null
    }

    get candidatoId() {
        return this.usuario && this.usuario.pessoa && this.usuario.pessoa.candidato ? this.usuario.pessoa.candidato.id : null
    }
}

export default new AuthStorage 
