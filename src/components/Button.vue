<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Button",
  emits: ['addTodoList'],
  props: {
    length: {
      type: Number,
      require: true
    },
  },
  setup(_, { emit }) {
    const addTodoList = () => emit('addTodoList');
    return {
      addTodoList
    }
  }
});
</script>

<template>
  <button class="btn btn-primary" :disabled="!((length as number) > 0)" @click="addTodoList">Add</button>
</template>