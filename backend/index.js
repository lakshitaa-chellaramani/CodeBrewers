// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const Application = require("E:/components-main (1)/components-main/src/app/InterviewSlot/InterviewModal.jsx"); // Assuming your Mongoose model is defined in applicationModel.js

// Create an instance of Express
const app = express();
const port = 8000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/company_side', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a route to handle slot booking
app.post('/api/book-slot', async (req, res) => {
    // const { date, time } = req.body;
    console.log("Hello from book slot");

    try {
        // Check if the slot is available
        const existingApplication = await Application.findOne({ date, time });

        if (existingApplication) {
            res.status(400).json({ message: 'Slot not available' });
        } else {
            // Create a new application record
            const newApplication = new Application({ date, time });
            await newApplication.save();
            res.status(200).json({ message: 'Slot booked' });
        }
    } catch (error) {
        console.error('Error checking slot availability:', error);
        // res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
