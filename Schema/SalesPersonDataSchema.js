const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesPersonDataSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        requried: true
    },
    sp_id: {
        type: String,
        required: true
    },
})

module.exports = SalesPersonDataSchema;