<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import "./styles/index.scss";
import Button from './components/Button.vue';
import store, { key } from './store';
import { useStore, mapState, mapGetters, mapMutations } from 'vuex';


export default defineComponent({
  name: "App",
  components: {
    Button
  },
  setup() {
    const store = useStore(key);
    const list = ref<string>('');

    const addList = computed(function () {
      store.commit('additem', {
        payload: list.value
      });
      list.value = '';
    });

    return {
      list,
      addList,
    }
  },
  methods: {
    ...mapMutations(['additem']),
  },
  computed: {
    ...mapState({
      todos() {
        return store.state.todos;
      }
    }),
    ...mapGetters(['todosLenght']),
  }
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
          <Button :length="list.length" @addTodoList="() => addList" />
        </div>
        <div class="card-footer" v-if="todos.length > 0">
          <div class="row">
            <div class="col-12 border border-0 border-bottom mt-1 mb-1 pt-1 pb-1" v-for="{ item } in todos">
              <p class="card--text m-0">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
