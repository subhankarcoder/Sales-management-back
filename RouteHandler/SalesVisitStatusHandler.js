const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const SalesVisitStatusSchema = require("../Schema/SalesVisitStatusSchema");
const SalesStatus = require("../Model/SalesVisitStatusModel");

router.post("/sales-status-upload", async (req, res) => {
  try {
    const newProduct = new SalesStatus({
      added_by: req.body.added_by,
      seller_name: req.body.seller_name,
      visit_status: req.body.visit_status,
      visit_date: req.body.visit_date,
      address: req.body.address,
      order_value: req.body.order_value,
      order_quantity: req.body.order_quantity,
      order_placement_date: req.body.order_placement_date,
    });

    await newProduct.save();
    console.log("New Sales status data added successfully");
    res.json({
      success: true,
      message: "New Sales status data added successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});
router.put("/sales-status/:id", async (req, res) => {
  try {
    const salesStatusId = req.params.id;
    const updatedFields = {
      added_by: req.body.added_by,
      seller_name: req.body.seller_name,
      visit_status: req.body.visit_status,
      visit_date: req.body.visit_date,
      address: req.body.address,
      order_value: req.body.order_value,
      order_quantity: req.body.order_quantity,
      order_placement_date: req.body.order_placement_date,
    };

    // Find the Sales Status by ID and update the fields
    const updatedSalesStatus = await SalesStatus.findByIdAndUpdate(
      salesStatusId,
      updatedFields,
      { new: true }
    );

    if (!updatedSalesStatus) {
      return res.status(404).json({
        success: false,
        message: "Sales status not found.",
      });
    }

    console.log("Sales status data updated successfully");
    res.json({
      success: true,
      message: "Sales status data updated successfully.",
      updatedSalesStatus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});
router.get("/sales-status/:added_by", async (req, res) => {
  try {
    const addedByParam = req.params.added_by;

    // Use the SalesStatus model to find documents matching the added_by parameter
    const salesStatusData = await SalesStatus.find({ added_by: addedByParam });

    if (salesStatusData.length > 0) {
      res.json({
        success: true,
        message: "Sales status data fetched successfully.",
        data: salesStatusData,
      });
    } else {
      res.json({
        success: false,
        message: "No sales status data found for the given 'added_by'.",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});
module.exports = router;
