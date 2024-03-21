<template>
  <h1> todos</h1>
  <table v-if="todoList.length">
    <thead>
      <tr>
        <th>id</th>
        <th>text</th>
        <th>from</th>
        <th>to</th>
        <th>createdAt</th>
        <th>actions</th>
      </tr>
      <tr v-for="(todo, index) in todoList" :key="index" :style="todo.isCompleted ?
      'background-color:red':'background-color:yellow'">
        <td>{{ todo.id }}</td>
        <td>{{ todo.text }}</td>
        <td>{{ new Date(todo.from).toLocaleDateString()}}</td>
        <td>{{ new Date(todo.to).toLocaleDateString()}}</td>
        <td>{{ new Date(todo.createdDate).toLocaleDateString() }}</td>
        <td>
          <button @click="()=>{handleComplete(todo)}">{{ todo.isCompleted ?
          "Incomplete" : "Complete" }}</button>
          <button
            @click="
              () => {
                deleteTodo(index);
              }
            "
          >
            deleted
          </button>
        </td>
      </tr>
    </thead>
  </table>
  <h2 v-else-if="!todoList.length"> no todos to show</h2>

</template>
<script setup>
import todoFunction from '@/mixins/todo';

const { todoList, addToLocalStorage } = todoFunction();
const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  addToLocalStorage();
};
const handleComplete = (todo) => {
  const Todo = todo;
  Todo.isCompleted = !Todo.isCompleted;
  addToLocalStorage();
};

</script>
