var express = require("express");
var router = express.Router();

require("../models/connection");
const Article = require("../models/articles");
// *************News_API aload free service only on localHost**************************
// const fetch = require("node-fetch");
// const NEWS_API_KEY = process.env.NEWS_API_KEY;

// router.get("/articles", (req, res) => {
//   fetch(
//     `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if (data.status === "ok") {
//         res.json({ articles: data.articles });
//       } else {
//         res.json({ articles: [] });
//       }
//     });
// });

//***************SAVED A FEW ARTICLES IN MY DB TO DEPLOY ON VERCEL******* */
router.get("/articles", (req, res) => {
  Article.find().then((data) => {
    res.json({ result: true, articles: data });
  });
});

module.exports = router;
