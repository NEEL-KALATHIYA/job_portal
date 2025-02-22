const express = require("express");
const companyController = require("../controller/companyControllers");
const Ability = require("../middleware/Ability");

const router = express.Router();

router.post(
  "/create",
  Ability(["HR", "ADMIN"]),
  companyController.createCompany
);

router.get("/", Ability(["ADMIN"]), companyController.getAllCompany);

router.get("/:id", companyController.getCompanyById);

router.put("/:id", Ability(["ADMIN", "HR"]), companyController.updateCompany);

router.delete(
  "/:id",
  Ability(["ADMIN", "HR"]),
  companyController.deleteCompany
);

router.get(
  "/admin/unverified",
  Ability(["ADMIN"]),
  companyController.getUnverified
);
module.exports = router;
