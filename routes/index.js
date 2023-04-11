var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// let imageDomains;
router.get('/articles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
        //  imageDomains = data.articles.map((article) => {
        //   const url = new URL(article.urlToImage);
        //   return url.hostname;
        // })
        
        // console.log('domains :', imageDomains)
      } else {
        res.json({ articles: [] });
      }
    });
});
// module.exports = imageDomains;
module.exports = router;
