<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import "./styles/index.scss";
import Button from './components/Button.vue';
import store, { key } from './store';
import { useStore, mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default defineComponent({
  name: "App",
  components: {
    Button,
  },
  setup() {
    const list = ref<string>('');

    return {
      list,
    }
  },
  methods: {
    ...mapActions(['addItem', 'removeItem']),
    todosAddItem() {
      console.log(this.$refs?.todosLine);
      this.addItem(this.list);
      this.list = '';
    }

  },
  computed: {
    ...mapState({
      todos() {
        return store.state.todos;
      }
    }),
    ...mapGetters(['todosLenght']),
  },
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-around">
      <div class="card w-75 p-0">
        <div class="card-header">
          <h1 class="card-title text-center">{{ todosLenght }}</h1>
          <input type="text" class="form-control" v-model="list">
        </div>
        <div class="card-body d-flex justify-content-center pt-2 pb-2">
          <Button :length="list.length" @addTodoList="todosAddItem" />
        </div>
        <div class="card-footer" v-if="todos.length > 0">
          <div class="row">
            <div class="col-12 border border-0 border-bottom mt-1 mb-1 pt-1 pb-1" v-for="{ item, id } in todos"
              ref="todosLine">
              <p class="card--text m-0 bg-white border-0 rounded-2 p-2 item__line">{{ item }}</p>
              <button class="btn btn-danger p-2 btn__remove" @click="() => removeItem(id)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.item__line {}

.btn__remove {
  font-size: 12px !important;
  margin: 10px 0;
}
</style>
