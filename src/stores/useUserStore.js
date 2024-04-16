import { reactive } from "vue";
const store = reactive({
  isLogin: false,
  userId: undefined,
});

export default function useUserStore() {
  return store;
}
