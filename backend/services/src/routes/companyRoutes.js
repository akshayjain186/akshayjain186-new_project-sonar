const express = require('express');
const { registerCompany, getCompanyDetails, updateCompanyDetails,deleteUserAndCompanyById } = require('../controllers/companyController');

const { authenticate } = require('../../middleware/authMiddleware.js');

const router = express.Router();

// Route to register user and company
router.post('/add', registerCompany);

router.get('/', authenticate, getCompanyDetails);

router.put('/update', authenticate, updateCompanyDetails); // Use PUT or PATCH as needed

router.delete('/user-and-company',authenticate, deleteUserAndCompanyById);



module.exports = router;
