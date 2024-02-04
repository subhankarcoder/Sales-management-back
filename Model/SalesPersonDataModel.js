const SalesPersonDataSchema = require("../Schema/SalesPersonDataSchema");
const mongoose = require("mongoose");

const SalesPersonDataModel = mongoose.model('SalesPersonDataModel', SalesPersonDataSchema);
module.exports = SalesPersonDataModel;