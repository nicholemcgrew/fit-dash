// Weight.js
const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;

