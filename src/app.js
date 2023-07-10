const express = require('express')
const hbs = require('hbs')
const path = require('path')

const port = process.env.PORT || 3000
const app = express();

const public_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')

app.use(express.static(public_path))
app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partials_path)

app.get('/', (req,res) => {
    res.render("index")
})
app.get('/about', (req,res) => {
    res.render("about")
})
app.get('/weather', (req,res) => {
    res.render("weather")
})
app.get('*', (req,res) => {
    res.render("404error")
})

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`)
})