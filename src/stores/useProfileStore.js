import { onMounted, reactive, watchEffect } from "vue";
const profileStore = reactive({
  role: "admin",
  name: "name",
  currentIndex: 0,
  items: ["History", "Profile"],
  histories: [
    {
      name: "History1",
      id: 0,
      date: "2021-10-10",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History2",
      id: 1,
      date: "2021-10-11",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History3",
      id: 2,
      date: "2021-10-12",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History4",
      id: 3,
      date: "2021-10-13",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History5",
      id: 4,
      date: "2021-10-14",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History6",
      id: 5,
      date: "2021-10-15",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History7",
      id: 6,
      date: "2021-10-16",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History8",
      id: 7,
      date: "2021-10-16",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History9",
      id: 8,
      date: "2021-10-16",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History10",
      id: 9,
      date: "2021-10-16",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
    {
      name: "History11",
      id: 10,
      date: "2021-10-16",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
    },
  ],
});
export default function useProfileStore() {
  if (profileStore.role === "admin") {
    profileStore.items.includes("Articles") ||
      profileStore.items.push("Articles");
    profileStore.items.includes("Edit") || profileStore.items.push("Edit");
  }
  return profileStore;
}
