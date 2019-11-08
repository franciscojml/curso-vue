<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- router-link :to="`/usuario/${id}/editar`" primario tag="button">Editar</router-link-->
        <router-link :to="{name: 'editarUsuario', params: {id}, query:{completo: true, lingua:'pt'}, hash: '#rodape'}" primario tag="button">Editar</router-link>
    </div>
</template>

<script>
export default {
    /*data(){
        return{
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from){
            this.id = to.params.id
        }
    },*/
    props: [ 'id' ],
    beforeRouteEnter (to, from, next) {
        //console.log(this.id') não será possível acessar o valor de id porque o componente não foi criado

        console.log('rota dentro do componente -> usuario detalhe')

        // dessa forma é possível acessar os atributos do componente, mas não é recomendável
        /*next(vm => {
            console.log(vm.id)
        })*/

        // é recomendável verificar questões de segurança dentro desse método de rota
        const autenticado = true
        autenticado ? next() : next(false)
    }
}
</script>

<style>

</style>