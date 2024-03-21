<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <h1>add tasks to do</h1>
  <form @submit.prevent="addToList">
    <input type="text" v-model="todoObject.text" name="text" id="text" />
    <br />

    <input type="date" v-model="todoObject.from" name="from" id="from" placeholder="from" />
    <br />

    <input type="date" v-model="todoObject.to" name="to" id="to" placeholder="to" /><br />
    <input type="submit" value="add" />
  </form>
</template>
<script setup>
import { ref } from 'vue';
import todoFunction from '@/mixins/todo';

const { todoList, addToLocalStorage } = todoFunction();
// Data
const todoObject = ref({
  id: '',
  text: '',
  from: '',
  to: '',
  createdDate: '',
  isCompleted: false,
});
// methods

const addToList = () => {
  todoList.value.push({
    id: todoList.value.length + 1,
    text: todoObject.value.text,
    from: todoObject.value.from,
    to: todoObject.value.to,
    createdDate: new Date(),
  });
  alert('added successfull');
  todoObject.value = {
    id: '',
    text: '',
    from: '',
    to: '',
    createdDate: '',
    isCompleted: false,
  };
  addToLocalStorage();
};

</script>
