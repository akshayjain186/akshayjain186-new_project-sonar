const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  
} = require('../controllers/userController');
const {
  verifyToken
} = require('../utils/verifyToken');
const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Endpoint to verify JWT token
router.post('/verify', verifyToken, (req, res) => {
  // If the token is valid, the user's ID will be available in req.user from the verifyToken middleware
  res.status(200).json({
    message: 'Token is valid',
    userId: req.userId
  });
});

// getAllUserList ,search by roleId,search by continent,country,currency,name and pagination
router.get('/users-list', getAllUsers);

// getUser by Itd Id
router.get('/:id', getUserById);

module.exports = router;