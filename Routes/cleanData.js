const express = require("express");
const router = express.Router();
const User = require("../models/User");
const cleanData = require("../cleaner/dataCleaner");

router.post("/clean-data", (req, res) => {
    try {
      const cleanedData = cleanData(req.body); // Pass the entire request body
  
      res.json(cleanedData); // Send the cleaned data as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).send("Error cleaning data"); // Handle errors appropriately
    }
  });

module.exports = router;
