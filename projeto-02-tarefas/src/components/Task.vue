<template>
  <div class="task" :class="stateClass" @click="$emit('taskStateChange', task)">
    <span class="close" @click.stop="$emit('taskDeleted', task)">X</span>
    <div>{{task.name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    task: { type: Object, require: true }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      };
    }
  }
};
</script>
<style >
.task {
    position: relative;
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

.pending .close{
    background-color: red;
}

.pending .done{
    background-color: green;
}

.close{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}
</style>