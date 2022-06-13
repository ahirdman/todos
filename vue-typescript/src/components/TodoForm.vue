<template>
  <form>
    <label>Title</label>
    <input type="text" />
    <label>Description</label>
    <input type="text" />
    <button>Add</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TodoForm',
});
</script>
