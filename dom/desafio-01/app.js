new Vue({
    el: '#desafio',
    data:{
        nome: 'Francisco Lima',
        idade: 41,
        idadeAvancada: 41 * 3,
        imagem: 'https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg'
    },
    methods:{
        random(){
            return Math.random()
        }
    }
})