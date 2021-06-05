<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h3>{{name}}</h3>
      <h3>{{age}}</h3>
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clearAllCompleted="clearAllCompleted"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
// 引入接口
import { Todo } from "./types/todo";
import { saveTodos, readTodos } from "./utils/localStorageUtil";

export default {
  name: "App",
  components: { Header, List, Footer },
  setup() {
    let user = reactive({
      name: '',
      age: 1,
    })
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     { id: 1, title: "奔驰", isCompleted: false },
    //     { id: 2, title: "宝马", isCompleted: true },
    //     { id: 3, title: "奥迪", isCompleted: false },
    //   ],
    // });
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    // 当界面加载完成后
    onMounted(() => {
      user.name = "张三"
      user.age = 30;

      setTimeout(() => {
        state.todos = readTodos();
      }, 500);
    });
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    // 修改TODO的状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      console.log("todo:", todo);
    };
    // 全选或全不选
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo: Todo) => {
        todo.isCompleted = isCompleted;
      });
    };
    // 清楚已经完成的
    const clearAllCompleted = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
      console.log("todos:", state.todos);
    };
    // watch(
    //   () => state.todos,
    //   (val) => {
    //     saveTodo(val)
    //   },
    //   { immediate:true, deep: true }
    // );
    watch(() => state.todos, saveTodos, {  deep: true });
    // state加上toRef，使用时直接使用todos数组
    return {
      ...toRefs(user),
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompleted,
    };
  },
};
</script>
<style scoped>
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #dddddd;
}
</style>