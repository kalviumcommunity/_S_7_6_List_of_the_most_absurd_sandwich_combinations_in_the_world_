const mongoose = require('mongoose');

const SandwichSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    absurdityLevel: { type: Number, required: true, min: 1, max: 10 },
    experience: { type: String, required: true },
    createdBy: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Sandwich', SandwichSchema);
