const express = require('express');
const bodyParser = require('body-parser');
const customLogger = require('./middleware/customLogger');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customLogger);

// Routes
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/recipes', recipeRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});