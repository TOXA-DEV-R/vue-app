<script setup lang="ts">
import { ref } from 'vue';

interface Todo {
  list: string,
}

const todos = ref<Todo[]>([]);
const list = ref<string>('');

function addList(): void {
  todos.value.push({ list: list.value });
  list.value = '';
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-around">
      <div class="card w-75 p-0">
        <div class="card-header">
          <input type="text" class="form-control" v-model="list">
        </div>
        <div class="card-body d-flex justify-content-center pt-2 pb-2">
          <button class="btn btn-primary" @click="addList">Add</button>
        </div>
        <div class="card-footer" v-if="todos.length > 0">
          <div class="row">
            <div class="col-12 border border-0 border-bottom mt-1 mb-1 pt-1 pb-1" v-for="{ list } in todos">
              <p class="card--text m-0">{{ list }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.col-3 {
  height: 50px;
}
</style>