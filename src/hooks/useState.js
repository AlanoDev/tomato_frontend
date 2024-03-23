import { ref } from "vue";

export default function useState(initialValue) {
  const state = ref(initialValue);
  const setState = (value) => {
    state.value = value;
  };
  return [state, setState];
}
