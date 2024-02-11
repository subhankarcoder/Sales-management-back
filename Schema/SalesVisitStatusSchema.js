const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesPersonDataSchema = new Schema({
    added_by: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: false
    },
    seller_name: {
        type: String,
        required: true
    },
    visit_status: {
        type: String,
        requried: true
    },
    visit_date: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    order_value: {
        type: String,
        required: false
    },
    order_quantity: {
        type: String,
        required: false
    },
    order_placement_date: {
        type: String,
        required: false
    }
})

module.exports = SalesPersonDataSchema;