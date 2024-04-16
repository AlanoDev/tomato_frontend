import { getAllDisease } from "@/api/api";
import { reactive, watchEffect } from "vue";
const articleStore = reactive({
  articles: [],
  diseases: [],
  initArticles() {
    fetch("/api/article/all")
      .then((res) => res.json())
      .then((res) => {
        this.articles = res.data;
      })
      .catch((err) => console.log(err));
  },
  updateDiseases() {
    getAllDisease().then((res) => {
      this.diseases = res.data;
    });
  },
  searchArticles(keyword) {
    keyword = keyword.toLowerCase();
    if (this.diseases.length == 0) {
      getAllDisease().then((res) => {
        this.diseases = res.data;
      });
    }
    let res = [];

    this.diseases.forEach((disease) => {
      console.log(disease.title)
      if (disease.title.toLowerCase().includes(keyword)) {
        this.articles.forEach((article) => {
          if (article.disease == disease.id) {
            res.push(article);
          }
        });
      }
    });

    this.articles
      .filter((article) => article.title.toLowerCase().includes(keyword))
      .forEach((article) => {
        if (!res.includes(article)) {
          res.push(article);
        }
      });
    return res.slice(0,8);
  },
  updateArticle(id, article) {
    fetch(`api/article/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: article.title,
        content: article.content,
        image: article.image,
        disease: article.disease,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code < 0) {
          console.log(res.msg);
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  addArticle(article) {
    fetch("api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: article.title,
        content: article.content,
        image: article.image,
        disease: article.disease,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code < 0) {
          console.log(res.msg);
          return;
        }
        article.id = res.data.id;
        this.articles.push(article);
      })
      .catch((err) => console.log(err));
  },
});
export function getHomeCards() {
  let articles;
  watchEffect(() => {
    articles = articleStore.articles.slice(0, 8);
    console.log(articles);
  });
  return articles;
}
export default function useArticleStore() {
  return articleStore;
}
