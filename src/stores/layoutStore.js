import { reactive } from "vue";

export const store = reactive({
  currentPage: "home",
  lastPage:"home",
  currentArticle: 0,
});
