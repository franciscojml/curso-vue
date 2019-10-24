import Vue from 'vue'
import axios from 'axios'

//configuracoes globais
//axios.defaults.baseURL = 'https://curso-vue-e7f8c.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = 'abc123'
//axios.defaults.headers.get['Accepts'] = 'application/json'


Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-e7f8c.firebaseio.com/',
            headers:{
                "Authorization": "abc123"
            }
        })
     
        //interceptor de requisicao
        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        }, error => Promise.reject(error))

        
        // interceptor de resposta
        Vue.prototype.$http.interceptors.response.use(resp => {
            /*const array = []
            for (let chave in resp.data){
                //forma tradicional
                //array.push({id: chave, nome: resp.data[chave].nome, email: resp.data[chave].email})

                //forma reduzida
                //array.push({id: chave, ...resp.data[chave]})

            }

            resp.data = array*/
            return resp
        }, error => Promise.reject(error))
    }
})