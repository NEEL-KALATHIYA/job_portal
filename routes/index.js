const { Router } = require("express");
const userRoutes = require("./userRoute");
const userDetailRoutes = require("./detailsRoute");
const companyRoutes = require("./companyRoute");
const jobRoutes = require("./jobRoute");

const index = Router();
index.use("/users", userRoutes);
index.use("/user-details", userDetailRoutes);
index.use("/companies", companyRoutes);
index.use("/jobs", jobRoutes);
module.exports = index;
