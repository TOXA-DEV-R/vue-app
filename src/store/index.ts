/** @format */

import { InjectionKey } from "vue";
import { createStore, Store, ActionPayload } from "vuex";
import { v4 as uuidv4 } from "uuid";

export interface Item {
  item: string;
  id: string;
}

export interface State {
  todos: Item[];
  user: string;
}

const ActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

const { ADD_ITEM, REMOVE_ITEM } = ActionTypes;

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    todos: [],
    user: "Husan",
  },
  mutations: {
    [ADD_ITEM](state: State, { payload }: ActionPayload): void {
      state.todos.push({ item: payload, id: uuidv4() });
    },
    [REMOVE_ITEM](state, { payload }: ActionPayload) {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
  },
  actions: {
    addItem({ commit }, payload) {
      console.log(payload);
      commit(ADD_ITEM, { payload: payload });
    },
    removeItem({ commit }, payload) {
      commit(REMOVE_ITEM, { payload: payload });
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
