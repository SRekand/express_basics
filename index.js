const express = require('express')
const path = require("path");
const app = express();

// adds public directory
app.use(express.static('public'));
// adds views directory path
app.set('views', path.join(__dirname, 'views'));
// adds views template engine
app.set('view engine', 'ejs');


app.get('/user/:username', (req, res) => {
    let user = req.params.username;
    res.render('index.ejs', {username : user});
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});