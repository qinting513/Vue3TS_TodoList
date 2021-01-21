<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span
      ><span>已完成{{ count }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAllCompleted">
      清除已完成任务
    </button>
  </div>
</template>
<script lang="ts">
import { Todo } from "@/types/todo";
import { defineComponent, computed, ref } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    checkAll: {
      type: Function,
      required: true,
    },
    clearAllCompleted: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    //   只有get方法
    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    // 全选或全不选的计算属性
    const isCheckAll = computed({
      get() {
        return count.value > 0 && count.value === props.todos.length;
      },
      set(val) {
        props.checkAll(val);
      },
    });
    const clearAllCompleted = () => {
      props.clearAllCompleted();
    };
    return { count, isCheckAll, clearAllCompleted };
  },
});
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 6px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>