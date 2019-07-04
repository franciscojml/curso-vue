new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Botão pressionado!')
        },
        armazenarValor(event){
            this.valor = event.target.value
        }
    }
})