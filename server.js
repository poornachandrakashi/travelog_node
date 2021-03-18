const express = require('express')
const articleRouter = require('./routes/articles')
const connectDB = require('./db/connection')
const Article= require('./models/article')
const methodOverride = require('method-override')
const app = express()


connectDB();

// mongoose.connect('mongodb+srv://dbUser:poorna@cluster0.7mpqi.mongodb.net/data?retryWrites=true&w=majority',{
//     useNewUrlParser:true, useUnifiedTopology:true
// })

//To convert html files to ejs format 
app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.send("");
// })

//Route for the article 
app.use(express.urlencoded({ extended:false}))
app.use('/articles',articleRouter)
app.use(methodOverride('_method'))

//This is main index route
app.get('/',async(req,res)=>{
    const articles = await Article.find().sort({
        createdAt:'desc'
    })
     res.render('articles/index',{ articles:articles})
})


//Default code to run in the port
app.listen(5000)