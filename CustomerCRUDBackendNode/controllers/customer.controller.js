const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.model");

const router = express.Router();

router.get("/", (req, res) => {
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customers", (req, res) => {
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/id/:id", (req, res) => {
  const query = Customer.where({ _id: req.params._id });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/firstName/:firstName", (req, res) => {
  const query = Customer.where({ firstName: req.params.firstName });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/lastName/:lastName", (req, res) => {
  const query = Customer.where({ lastName: req.params.lastName });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.get("/customer/age/:age", (req, res) => {
  const query = Customer.where({ age: req.params.age });
  Customer.find((err, data) => {
    res.json(data);
  });
});

router.post("/customers", (req, res) => {
  var newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  newCustomer.save((err, data) => {
    res.json(data);
  });
});

router.put("/customers/update/:id", (req, res) => {
  const query = Customer.where({ _id: req.params._id });
  Customer.find((err, data) => {
    var newCustomer = new Customer({
      firstName: data.body.firstName,
      lastName: data.body.lastName,
      age: data.body.age,
    });
    newCustomer.update((err, data) => {
      res.json(data);
    });
  });
});

router.delete("/customers/delete/:id", (req, res) => {
  Customer.remove({ _id: req.params._id }, (err, data) => {
    if (!err) res.json(data);
    else res.json(err);
  });
});

module.exports = router;
