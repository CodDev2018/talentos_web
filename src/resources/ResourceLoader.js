import AuthStorage from '../storages/AuthStorage'

export default {
    async getResource(path, method, data, headers) {
        try {
            method = !method ? 'GET' : method
            let options = {
                method: method,
                headers: {
                    'Content-type': 'application/json'
                }
            }
            if (data) {
                if (method === 'GET') {
                    path += '?' + Object.keys(data)
                        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                        .join('&')
                } else {
                    options.body = JSON.stringify(data)
                }
            }
            if (headers) Object.assign(options.headers, headers)
            let response = await fetch('http://127.0.0.1:3000/api' + path, options)
            if (![200, 201].includes(response.status)) {
                let err = await response.json()
                throw new Error(err.message)
            }
            return (await response.json()).data
        } catch (err) {
            throw err
        }
    },

    async getProtectedResource(path, method, data, headers) {
        try {
            let newHeaders = {
                "x-access-token": AuthStorage.token
            }
            if (headers) newHeaders = Object.assign(newHeaders, headers)
            return await this.getResource(path, method, data, newHeaders)
        } catch (err) {
            throw err
        }
    },

}
