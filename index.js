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

    // Randomly choose between "sometimes this" and "sometimes that"
    req.randomText = Math.random() < 0.5 ? 'sometimes this' : 'sometimes that';
    next(); // Pass control to the next middleware
}, (req, res) => {
    res.send(req.randomText);
});

// Middleware for handling 404 errors
app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}. Good Job!`);
});