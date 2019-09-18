<template>
    <div class="task" :class="stateClass">
        <template>
            <div>{{task.name}}</div>
        </template>
    </div>
    </template>
<script>
export default {
    props:{
        task: {type: Object, require: true}
    },
    computed: {
        stateClass(){
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
}
</script>
<style >
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 3rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid red;
        background-color: red;
    }

    .done { 
        color: white;
        border-left: 12px solid green;
        background-color: green;
        text-decoration: line-through;
    }
</style>