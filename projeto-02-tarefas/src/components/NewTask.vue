<template>
    <div class="task-grid">
        <input v-model="name" type="text" @keydown.enter="add">
        <button @click="add">+</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', {name: this.name}),
            this.name = ''
        }
    },

}
</script>
<style >

</style>