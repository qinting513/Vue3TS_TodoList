<template>
  <li
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteAction">
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const bgColor = ref("white");
    const myColor = ref("black");
    const isShow = ref(false);

    const mouseHandle = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        bgColor.value = "pink";
        myColor.value = "green";
        isShow.value = true;
      } else {
        // 鼠标离开
        bgColor.value = "white";
        myColor.value = "black";
        isShow.value = false;
      }
    };
    const deleteAction = () => {
      if (window.confirm("确定要删除吗?")) {
        props.deleteTodo(props.index);
      }
    };
    // 计算属性的方式 来让当前的复选框选中或不选
    const isComplete = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val) {
        props.updateTodo(props.todo, val);
      },
    });
    return { mouseHandle, bgColor, myColor, deleteAction, isShow, isComplete };
  },
});
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #dddddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>