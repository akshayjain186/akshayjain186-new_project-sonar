const express = require("express");
const {
  registerCompany,
  getCompanyDetails,
  updateCompanyDetails,
  deleteUserAndCompanyById,
  searchByCompanyName,
  getAllCompanies,
} = require("../controllers/companyController");

const { authenticate } = require("../../middleware/authMiddleware.js");

const router = express.Router();

// Route to register user and company
router.post("/register", registerCompany);

router.get("/", authenticate, getCompanyDetails);

router.put("/update", authenticate, updateCompanyDetails);

router.delete("/user-and-company", authenticate, deleteUserAndCompanyById);

router.get("/search", searchByCompanyName);

router.get("/list", getAllCompanies);

module.exports = router;
