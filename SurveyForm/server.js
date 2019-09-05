const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (request, response) => {
    response.render("index");
});

app.post('/result', (request, response)=> {
    request.session.results = request.body;
    console.log(request.body);
    response.redirect("result");
})

app.get('/result', (request, response)=> {
    response.render("results", {results:request.session.results});
})








app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));