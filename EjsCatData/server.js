const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});

app.get('/cats', (request, response) => {
    response.render('cats');
})
app.get('/frightened', (request, response) => {
    var details = {
        name: "Frighters",
        favFood: "Fish Flakes",
        age: '1',
        spots: ["Under the couch", "Under the bed", "Pretty much under anything"]
    }
    response.render("details", {kitty: details});
})
app.get('/thoughtfull', (request, response) => {
    var details = {
        name: "Thinkers",
        favFood: "Pages from books",
        age: '2',
        spots: ["Library", "On the Computer", "Couch"]
    }
    response.render("details", {kitty: details});
})
app.get('/jumping', (request, response) => {
    var details = {
        name: "Hoppers",
        favFood: "Frosted Flakes",
        age: '2',
        spots: ["Where ever he can jump on frighters", "trampoline", "beds"]
    }
    response.render("details", {kitty: details});
})

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));