const express = require("express");
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (request, response) => {
    if(request.session.counter == null){
        request.session.counter = 0;
    }
    else{
        request.session.counter+=1;
    }
    response.render("index", {counter: request.session.counter});
});

app.get("/two", (request, response)=> {
    request.session.counter +=1;
    response.redirect("/");
})

app.get("/destroy", (request, response)=> {
    request.session.destroy();
    response.redirect("/")
})






app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));