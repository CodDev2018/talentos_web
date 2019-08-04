import ResourceLoader from "./ResourceLoader"
import moment from "moment"

class PessoaResource {
  async getById(id) {
    try {
      let pessoa = await ResourceLoader.getProtectedResource("/pessoas/" + id)
      pessoa.dataNascimentoFormatada = moment(pessoa.dataNascimento).format('DD/MM/YYYY')
      return pessoa
    } catch (error) {
      throw error
    }
  }

  async save(data) {
    try {
      data.dataNascimento = moment(data.dataNascimentoFormatada, 'DD/MM/YYYY').format()
      if (!data.id) {
        return await this._create(data)
      } else {
        return await this._update(data.id, data)
      }
    } catch (error) {
      throw error
    }
  }

  async _create(data) {
    try {
      let pessoa = await ResourceLoader.getProtectedResource(
        '/pessoas',
        'POST',
        data
      )
      return pessoa
    } catch (error) {
      throw error
    }
  }

  async _update(id, data) {
    try {
      let pessoa = await ResourceLoader.getProtectedResource(
        '/pessoas/' + id,
        'PATCH',
        data
      )
      return pessoa
    } catch (error) {
      throw error
    }
  }
}

export default new PessoaResource()
