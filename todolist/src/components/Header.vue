<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入您的任务，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref("");
    const add = () => {
      const text = title.value;
      if (!text.trim()) {
        return;
      }
      const todo: Todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      };
      props.addTodo(todo);
      //    清空文本框
      title.value = "";
    }
    return { title, add };
  },
});
</script>
<style scoped>
.todo-header input {
  width: 95%;
  height: 28px;
  padding: 4px 8px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>