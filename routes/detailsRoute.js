const { Router } = require("express");
const userDetailsController = require("../controller/detailsControllers");
const routes = Router();

routes.get("/user/:userId", userDetailsController.getUserDetailsByUserId);
routes.post("/", userDetailsController.createUser);
routes.patch("/:id", userDetailsController.updateUser);

module.exports = routes;
