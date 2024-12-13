const express = require('express');
const router = express.Router();
const {
  createProjectManagerRole,
  getAllProjectManagerRoles,
  getProjectManagerRoleById,
  updateProjectManagerRole,
  deleteProjectManagerRole,
} = require('../controllers/ProjectmanageroleController'); 

// Create a new role
router.post('/add', createProjectManagerRole);

// Get all roles
router.get('/list', getAllProjectManagerRoles);

// Get a role by ID
router.get('/:id', getProjectManagerRoleById);

// Update a role by ID
router.put('/:id', updateProjectManagerRole);

// Delete a role by ID
router.delete('/:id', deleteProjectManagerRole);

module.exports = router;
