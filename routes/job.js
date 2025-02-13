const express = require("express");
const router = express.Router();

const jobController=require("../controller/job")

router.post("/", jobController.createJob);

router.get("/", jobController.getAllJobs);

router.get("/:id", jobController.getJobById);

router.get("/company/:companyId", jobController.getJobsByCompanyId);

router.put("/:id", jobController.updateJob);

router.delete("/:id", jobController.deleteJob);

module.exports = router;
