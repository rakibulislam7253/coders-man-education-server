const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
 app.use(cors())

const categories = require('./data/catagories.json')
 const news = require('./data/news.json')




app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/category/:id', (req, res) => {
    const id = (req.params.id)
    if (id == 08) {
        res.send(news)
    }
    else {
        const selectedcategory = news.filter(n => n.category_id === id)
        res.send(selectedcategory)
    }

})

app.get('/coursename/:id', (req, res) => {
     const id = (req.params.id)
     const selectedNews = news.find(n => n._id === id)
     // console.log(req.params.id)
     res.send(selectedNews)
 });


app.listen(port, () => {
    console.log('on port', port);
})

