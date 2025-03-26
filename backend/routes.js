const express = require('express');
const router = express.Router();
const Sandwich = require('./postschema');

// ✅ Create a new sandwich (POST)
router.post('/sandwiches', async (req, res) => {
    try {
        const newSandwich = new Sandwich(req.body);
        await newSandwich.save();
        res.status(201).json(newSandwich);
    } catch (error) {
        res.status(500).json({ message: "Error adding sandwich", error });
    }
});

// ✅ Get all sandwiches (GET)
router.get('/sandwiches', async (req, res) => {
    try {
        const sandwiches = await Sandwich.find();
        if (!sandwiches.length) return res.status(404).json({ message: "No sandwiches found" });
        res.json(sandwiches);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sandwiches", error });
    }
});

// ✅ Get a single sandwich by ID (GET)
router.get('/sandwiches/:id', async (req, res) => {
    try {
        const sandwich = await Sandwich.findById(req.params.id);
        if (!sandwich) return res.status(404).json({ message: "Sandwich not found" });
        res.json(sandwich);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sandwich", error });
    }
});

// ✅ Update a sandwich by ID (PUT)
router.put('/sandwiches/:id', async (req, res) => {
    try {
        const updatedSandwich = await Sandwich.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSandwich) return res.status(404).json({ message: "Sandwich not found" });
        res.json(updatedSandwich);
    } catch (error) {
        res.status(500).json({ message: "Error updating sandwich", error });
    }
});

// ✅ Delete a sandwich by ID (DELETE)
router.delete('/sandwiches/:id', async (req, res) => {
    try {
        const deletedSandwich = await Sandwich.findByIdAndDelete(req.params.id);
        if (!deletedSandwich) return res.status(404).json({ message: "Sandwich not found" });
        res.json({ message: "Sandwich deleted successfully", deletedSandwich });
    } catch (error) {
        res.status(500).json({ message: "Error deleting sandwich", error });
    }
});

module.exports = router;
