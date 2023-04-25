const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: String,
    source: {
        id: String,
        name: String,
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
});


const Article = mongoose.model('articles', articleSchema);

module.exports = Article;