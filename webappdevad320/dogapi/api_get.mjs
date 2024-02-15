import express from 'express';
import { data } from './dog_facts.mjs';
//const path = 'path';
const app = express();

// Import data from dog_facts.js
let numberOfFacts = 0;

// Serve static files from the "public" directory
//app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get dog facts
app.get('/facts:numberOfFacts', (req, res) => {
  try {
    // Retrieve the value of numberOfFacts from the URL
    numberOfFacts = parseInt(req.params.numberOfFacts);

    // Validate the number parameter
    if (isNaN(numberOfFacts)) {
      throw new Error('Invalid number parameter. Please provide a valid number.');
    }

    // If the number parameter is provided, return that many facts
    if (numberOfFacts) {
      if (numberOfFacts > data.length) {
        numberOfFacts = data.length;
      }
      const selectedFacts = data.slice(0, numberOfFacts);
      res.json({ facts: selectedFacts, success: true });
    } else {
      // If no number parameter provided, return all facts
      res.json({ facts: data, success: true });
    }
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message, success: false });
  }
});

app.get('/facts', (req, res) => {
    try {
        res.json({ facts: data, success: true });
    } catch (error) {
      // Handle errors
      res.status(400).json({ error: error.message, success: false });
    }
  });

// Middleware for handling 404 errors
app.use((req, res) => {
    res.sendFile(__dirname + '/404.html');
});

// Set the port to listen on
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
