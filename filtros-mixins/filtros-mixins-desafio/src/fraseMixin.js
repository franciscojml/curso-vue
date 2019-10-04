export default{
    computed: {
		fraseComVingulaMixin(){
			return this.frase.replace(/ /g, ',')
		},
		fraseComTamanhosMixin() {
			return this.frase.split(' ').map(nome => `${nome} (${nome.length})`).join(' ')
		}
	}
}