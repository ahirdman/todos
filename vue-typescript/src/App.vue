<template>
  <div id="app">
    <sectoin class="container">
      <TodoHeader />
      <TodoForm />
    </sectoin>
    <main>
      <TodoList />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import TodoHeader from './components/TodoHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TodoHeader,
    TodoForm,
    TodoList,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: #b0bdcc;
  background-color: #12181b;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
