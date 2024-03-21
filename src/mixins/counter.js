import { ref } from 'vue';

const handleCounter = () => {
  const counter = ref(0);
  const increaseCounter = () => {
    counter.value += 1;
  };
  const decreaseCounter = () => {
    counter.value -= 1;
  };
  return {
    counter,
    increaseCounter,
    decreaseCounter,
  };
};
export default handleCounter;
