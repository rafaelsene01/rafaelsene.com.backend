const express = require("express");
// const bodyParser = require("body-parser");

const HomeController = require("./controller/HomeController");

const routes = new express.Router();
// routes.use(bodyParser.json());
// routes.use(bodyParser.urlencoded({ extended: true }));

routes.get("/", HomeController.getText);
routes.get("/:_id", HomeController.getText);
routes.post("/", HomeController.postText);
routes.post("/:_id", HomeController.postText);

module.exports = routes;
