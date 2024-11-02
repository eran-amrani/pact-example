const express = require('express');
const app = express();
const port = 5000;

// Create a sample user data for the demo
const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com"
};

app.get('/user', (req, res) => {
  res.json({
    message: `Hello, ${user.name}`,
    user
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
