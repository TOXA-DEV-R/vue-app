/** @format */

import { InjectionKey } from "vue";
import { createStore, Store, ActionPayload } from "vuex";

export interface Item {
  item: string;
}

export interface State {
  todos: Item[];
  user: string;
}

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    todos: [],
    user: "Husan",
  },
  mutations: {
    additem(state: State, { payload }: ActionPayload): void {
      state.todos.push({ item: payload });
    },
  },
  getters: {
    todosLenght(state): number {
      return state.todos.length;
    },
  },
});

export { key };
export default store;
