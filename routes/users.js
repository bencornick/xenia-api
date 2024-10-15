var express = require('express');
var router = express.Router();

const authController = require("../controllers/userController");

router.get("/", authController.userAuthHome);

router.post('/login', authController.login);

router.post("/register", authController.register);

module.exports = router;
