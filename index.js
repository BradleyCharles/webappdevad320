const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define about route
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// Route for "/foo" using next() method
app.get('/foo', (req, res, next) => {
    // Math.random to determine if you send this or that.
    if (Math.random() < 0.5){
        res.send('sometimes this');
    }else{
        next();
    }
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

// Middleware for handling 404 errors
app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    let goodJob;
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            goodJob = "Good Job!";
            break;
        case 2:
            goodJob = "Nice code!";
            break;
        case 3:
            goodJob = "Awesome work!";
            break;
        case 4:
            goodJob = "Sweet server, bro!";
            break;
        default:
            goodJob = "Keep it up!";
    }
    console.log(`Server is running successfully on port ${port}. ${goodJob}`);
});