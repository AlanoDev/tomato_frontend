import { onMounted, reactive, watchEffect } from "vue";
import useArticleStore from "./useArticleStore";
import useUserStore from "./useUserStore";
const profileStore = reactive({
  role: "admin",
  name: "myname",
  email: "email",
  createDate: "2021-10-10",
  currentIndex: 0,
  editId: 0,
  items: ["History", "Profile", "Favorites"],
  histories: [],
  favorites: [],
});
export default function useProfileStore() {
  const userStore = useUserStore();
  if (!userStore.isLogin) {
    if (profileStore.role === "admin") {
      profileStore.items.includes("Articles") ||
        profileStore.items.push("Articles");
      profileStore.items.includes("Edit") || profileStore.items.push("Edit");
    }
    profileStore.histories.splice(0, profileStore.histories.length);
    profileStore.favorites.splice(0, profileStore.favorites.length);
  }
  onMounted(() => {
    const articleStore = useArticleStore();
    profileStore.editId = articleStore.articles[0].id;
  });
  return profileStore;
}
