import {reactive } from "vue";
const articleStore = reactive({
  articles: [
    {
      title: "Article1",
      id: 0,
      date: "2021-10-10",
      img: "https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nullam nec turpis nec nunc tincidunt ultricies",
    },
  ],
});

export default function useArticleStore() {
  if (articleStore.articles.length <= 1) {
    for (let i = 1; i <= 10; i++) {
      articleStore.articles.push({
        title: `Article${i + 1}`,
        id: i,
        date: new Date().toISOString().slice(0, 10),
        img: `https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b${i}`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nullam nec turpis nec nunc tincidunt ultricies ${i}`,
      });
    }
  }
  return articleStore;
}
