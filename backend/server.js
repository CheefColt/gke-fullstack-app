const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
