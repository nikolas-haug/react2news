import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "169fab141c324b17a7119dc49caf6b92";

export default {
  getData(search, start, end) {
    return axios.get(`${URL}?q=${search}&begin_date=${start}&end_date=${end}&api-key=${KEY}`);
  },
  getSavedArticles() {
    return axios.get("/api/articles");
  },
  saveArticles(Article) {
    return axios.post("api/articles", Article)
  },
  deleteArticle(id) {
    return axios.delete("api/articles/" + id);
  }
};
