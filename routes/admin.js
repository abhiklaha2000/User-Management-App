const express = require('express');
const admin_router = new express.Router();
const adminController =  require("../controllers/admin")

admin_router.get('/users',adminController.getUser);

module.exports = admin_router;

