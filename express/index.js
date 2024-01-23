const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define about route
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// Middleware for handling 404 errors
app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});