<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr/>
		<p>{{ frase | espaco-por-virgula }}</p>
		<p>{{ frase | espacoPorVirgula }}</p>
		<hr/>
		<p>{{ frase | contar-palavras }}</p>
		<p>{{ frase | contarPalavras }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr/>
		<p>{{ fraseComVingula }}</p>
		<p>{{ fraseComTamanhos }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<hr/>
		<p>{{ fraseComVingulaMixin }}</p>
		<p>{{ fraseComTamanhosMixin }}</p>
	</div>
</template>

<script>
import FraseMixin from '@/fraseMixin'

export default {
	mixins:[FraseMixin],
	data(){
		return{
			frase: 'Essa é a frase que será usada no desafio!'
		}
	},
	filters:{
		espacoPorVirgula(valor){
			return valor.replace(/ /g, ',')
		}
	}, computed: {
		fraseComVingula(){
			return this.frase.replace(/ /g, ',')
		},
		fraseComTamanhos() {
			return this.frase.split(' ').map(nome => `${nome} (${nome.length})`).join(' ')
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
