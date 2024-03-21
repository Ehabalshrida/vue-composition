import { ref, onMounted } from 'vue';

const todosFunction = () => {
  // Data
  const todoList = ref([]);
  // Methods
  const addToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todoList.value));
  };
  const getFromLocalStorag = () => {
    if (localStorage.getItem('todos')) {
      todoList.value = JSON.parse(localStorage.getItem('todos'));
    }
  };
  onMounted(() => {
    getFromLocalStorag();
  });
  return {
    todoList, addToLocalStorage,
  };
};
export default todosFunction;
