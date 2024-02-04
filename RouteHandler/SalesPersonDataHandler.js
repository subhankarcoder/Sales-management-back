const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const SalesPersonDataSchema = require("../Schema/SalesPersonDataSchema");
const SalesPerson = require("../Model/SalesPersonDataModel");

//PD1604230001
router.post("/sales-person-details", async (req, res) => {
  try {
    const spIdRegex = /^PD160423\d{4}$/;
    if (!spIdRegex.test(req.body.sp_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid sp_id format." });
    }
    const newProduct = new SalesPerson({
      username: req.body.username,
      password: req.body.password,
      sp_id: req.body.sp_id,
    });

    await newProduct.save();
    console.log("New Sales person added successfully");
    res.json({
      success: true,
      message: "New Sales person added successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});

router.get("/get-sp-id/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const salesPerson = await SalesPerson.findOne({ username });

    if (!salesPerson) {
      return res.status(404).json({ success: false, message: "SalesPerson not found." });
    }

    res.json({
      success: true,
      sp_id: salesPerson.sp_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});
module.exports = router;
