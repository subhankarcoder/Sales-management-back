const SalesVisitStatusSchema = require("../Schema/SalesVisitStatusSchema");
const mongoose = require("mongoose");

const SalesVisitStatusModel = mongoose.model('SalesVisitStatusModel', SalesVisitStatusSchema);
module.exports = SalesVisitStatusModel;