const express = require('express');
const {
  registerSmallProject,
  getSmallProject,
  getProjectsByJobType
  
} = require('../controllers/ProjectController.js');
const router = express.Router();
const { authenticate } = require('../../middleware/authMiddleware.js');

router.post('/add', registerSmallProject);

router.get('/small-projects', authenticate, getSmallProject);

router.get('/search',getProjectsByJobType);


module.exports = router;
