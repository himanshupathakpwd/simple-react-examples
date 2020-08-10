const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema({
    path: String,
    value: Number,
})

mongoose.model('pages', pageSchema);