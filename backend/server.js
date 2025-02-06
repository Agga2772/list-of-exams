const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 


const examsData = require('./TechTestJson.json').Exams; 

app.get('/api/exams', (req, res) => {
  res.json(examsData); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

