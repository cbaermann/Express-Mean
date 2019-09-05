const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.get('/cars', (request, response) => {
    response.render('cars');
})
app.get('/cats', (request, response) => {
    response.render('cats');
})
app.get('/form', (request, response) => {
    response.render('form');
})
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));
