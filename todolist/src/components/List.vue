<template>
  <ul class="todo-main" v-if="todos.length > 0">
    <Item
      v-for="(item, index) in todos"
      :key="index"
      :todo="item"
      :index="index"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
    ></Item>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
export default {
  name: "List",
  components: { Item },
  props: ["todos", "deleteTodo", "updateTodo"],
};
</script>
<style scoped>
.todo-main {
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding: 10px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>