<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
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
}
</script>

<style>

</style>