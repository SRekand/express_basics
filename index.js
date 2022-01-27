const express = require('express')
const app = express();

// set up brouther address row router
app.get('/', (req, res)=> {
    // create html responce
    res.send('<a href="/contact">Contact us</a> <br> <a href="/about">About us</a>');
});

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact us page</h1>');
})

app.get('/about', (req, res)=> {
    res.send('<h1>About us page</h1>');
})

app.get('*', (req, res)=> {
    res.send('404. This page does not exist. <a href="/">Go to Homepage</a>')
})

// listen app via part
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});