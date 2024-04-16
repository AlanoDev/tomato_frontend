import { onMounted, reactive, watchEffect } from "vue";
import useUserStore from "./useUserStore";
const profileStore = reactive({
  role: "",
  name: "",
  email: "",
  createDate: "2021-10-10",
  currentIndex: 0,
  editId: undefined,
  items: ["History", "Profile", "Favorites"],
  histories: [],
  favorites: [],
});
const userStore = useUserStore();
export function getAllFavorites() {
  if (userStore.isLogin) {
    fetch(`api/favorite/${userStore.userId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code < 0) {
          console.log(res.msg);
          return;
        }
        profileStore.favorites = res.data;
      });
  }
}
export function deleteFavorite(id) {
  if (userStore.isLogin) {
    let fid = profileStore.favorites.find(
      (favorite) => favorite.article_id == id
    ).id;
    profileStore.favorites.splice(
      profileStore.favorites.indexOf(
        profileStore.favorites.find((favorite) => favorite.id == fid)
      ),
      1
    );
    fetch(`api/favorite/${fid}`, {
      method: "DELETE",
    });
  }
}

export function addFavorite(article_id) {
  if (userStore.isLogin) {
    if (
      !profileStore.favorites.find(
        (favorite) => favorite.article_id == article_id
      )
    ) {
      profileStore.favorites.push({
        article_id: article_id,
      });
      fetch(
        `api/favorite/?user_id=${userStore.userId}&article_id=${article_id}`,
        {
          method: "POST",
        }
      );
    }
  }
}

export function deleteHistory(id) {
  if (userStore.isLogin) {
    profileStore.histories.splice(
      profileStore.histories.indexOf(
        profileStore.histories.find((history) => history.id == id)
      ),
      1
    );
    fetch(`api/history/?id=${id}`, {
      method: "DELETE",
    });
  }
}
export function addHistory(article_id) {
  if (userStore.isLogin) {
    if (
      !profileStore.histories.find(
        (history) => history.article_id == article_id
      )
    ) {
      profileStore.histories.push({
        article_id: article_id,
      });
      fetch(
        `api/history/?user_id=${userStore.userId}&article_id=${article_id}`,
        {
          method: "POST",
        }
      );
    }
  }
}
function remove(item) {
  if (profileStore.items.includes(item)) {
    profileStore.items.splice(profileStore.items.indexOf(item), 1);
  }
}
export function clearProfileUserInfo() {
  profileStore.role = "";
  profileStore.name = "";
  profileStore.email = "";
  remove("Articles");
  remove("Edit");
}
export default function useProfileStore() {
  const userSotre = useUserStore();
  watchEffect(() => {
    if (
      userSotre.isLogin &&
      profileStore.email === "" &&
      profileStore.name === "" &&
      profileStore.role === ""
    ) {
      fetch("api/user/" + userSotre.userId, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code < 0) {
            console.log(res.msg);
            return;
          }
          profileStore.email = res.data.email;
          profileStore.name = res.data.name;
          profileStore.role = res.data.role;
          if (profileStore.role === "admin") {
            profileStore.items.includes("Articles") ||
              profileStore.items.push("Articles");
            profileStore.items.includes("Edit") ||
              profileStore.items.push("Edit");
          }
          profileStore.histories.splice(0, profileStore.histories.length);
          profileStore.favorites.splice(0, profileStore.favorites.length);
        })
        .catch((err) => console.log(err));
    }
  });
  return profileStore;
}
