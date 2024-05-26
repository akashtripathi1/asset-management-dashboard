const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const assetRoutes = require('./routes/assetRoutes');
const ticketRoutes = require('./routes/ticketRoutes');


const app = express();

// Connect Database 
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

// cors middleware, this will enable bakend to handle requests from the origin which is set
app.use(cors({
    origin: 'http://localhost:3000' // This allows only requests from this origin
}));

// Define Routes
app.use('/api/assets',assetRoutes);
app.use('/api/tickets',ticketRoutes);

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));