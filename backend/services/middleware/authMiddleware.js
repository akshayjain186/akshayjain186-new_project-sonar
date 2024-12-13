const jwt = require('jsonwebtoken');
const User  = require('../../user-service/src/models/userModel'); // Assuming you have a User model

/**
 * Middleware to authenticate the user by verifying the provided token.
 */
const authenticate = async (req, res, next) => {
    // Retrieve the token from the Authorization header
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No or malformed token provided');
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1]; // Extract token

    try {
        console.log('Verifying token:', token);

        // Decode and verify the token using JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the user from the database based on the userId in the token
        const user = await User.findByPk(decoded.userId); // Adjust according to your User model

        if (!user) {
            console.log('User not found with the decoded user ID');
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user; // Attach user data to request object
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        console.error('Error during token verification or user retrieval:', error.message);
        return res.status(401).json({ message: 'Invalid token, authorization denied' });
    }
};

module.exports = { authenticate };
