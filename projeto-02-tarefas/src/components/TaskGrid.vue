<template>
    <div class="tasks-grid">
        <template>
            <Task v-for="task in tasks" :key="task.name" :task="task"/>
        </template>
    </div>
    </template>
<script>
import Task from '@/components/Task.vue'

export default {
    components:{Task},
    props:{
        tasks: {type: Array, require: true}
    }
}
</script>
<style >

</style>