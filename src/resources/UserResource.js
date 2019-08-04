import ResourceLoader from "./ResourceLoader"
import AuthStorage from "../storages/AuthStorage"

class UserResource {
    async getBy(id) {
        try {
            let user = await ResourceLoader.getProtectedResource("/users/" + id)
            return user
        } catch (error) {
            throw error
        }
    }

    async save(data) {
        try {
            let user = await ResourceLoader.getResource("/users/", "POST", data)
            return user
        } catch (error) {
            throw error
        }
    }

    async login(email, senha) {
        try { 
            const objLogin = {
                email: email,
                senha: senha
            }
            let result = await ResourceLoader.getResource("/users/login", "POST", objLogin)
            AuthStorage.usuario = result.usuario
            AuthStorage.token = result.token
            return result
        } catch (error) {
            throw error
        }
    }
}

export default new UserResource
