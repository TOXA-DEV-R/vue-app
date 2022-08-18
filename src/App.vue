
<script lang="ts">
import { defineComponent } from 'vue';
import items from './data/items';

export default defineComponent({
  name: "App",
  components: {

  },
  data() {
    return {
      items: items,
    }
  }
})
</script>

<template>
  <div id="nav">
    <RouterLink to="/" :class="{ active: $route.name === 'Home' }">
      Home
    </RouterLink>
    <RouterLink to="/card" :class="{ active: $route.name === 'Card' }">
      About
    </RouterLink>
  </div>
  <RouterView />
</template>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  padding: 10px;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
}

a {
  font-weight: bold;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;

  &.active {
    color: #2c3e50;
  }
}

.text-center {
  text-align: center;
}
</style>
