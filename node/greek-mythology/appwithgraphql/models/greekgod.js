const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const godSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('GreekGod', godSchema, 'greekgodsinfo');