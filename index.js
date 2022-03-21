const express = require('express')
const app = express();

// set up routher address row router
app.get('/', (req, res)=> {
    // create html responce
    res.send('<a href="/contact">Contact us</a> <br> <a href="/about">About us</a> <br> <a href="/homepage">Home Page</a>');
});
// Contacts
app.get('/contact', (req, res)=> {
    res.send('<h1>Contact us page</h1>');
})
// Homepage
app.get('/homepage', (req, res)=> {
    res.send('<h1>This is a HomePage</h1>')
})
// About page
app.get('/about', (req, res)=> {
    res.send('<h1>About us page</h1>');
})
// Error page kui ei leia ülesse aadressi
app.get('*', (req, res)=> {
    res.send('404. This page does not exist. <a href="/">Go to Homepage</a>')
})

// listen app via part
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});