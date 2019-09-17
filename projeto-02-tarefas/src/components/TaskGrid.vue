<template>
    <div class="tasks">
        <template>
            <div v-for="task in tasks" :key="task.name">
                {{task.name}}
            </div>
        </template>
    </div>
    </template>
<script>
export default {
    props:{
        tasks: {type: Array, require: true}
    }
}
</script>
<style >

</style>