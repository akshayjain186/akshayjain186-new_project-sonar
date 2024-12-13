/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user with the provided details.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               mobile_no:
 *                 type: string
 *               roleId:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               continent_id:
 *                 type: integer
 *               country_id:
 *                 type: integer
 *               currency_id:
 *                 type: integer
 *               language_id:
 *                 type: integer
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               postal_code:
 *                 type: string
 *               organization_number:
 *                 type: string
 *     responses:
 *       201:
 *         description: User successfully registered.
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: An internal server error occurred.
 */


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     description: Logs in the user with email and password, returns a JWT token.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully with a JWT token.
 *       401:
 *         description: Invalid credentials.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/users/verify:
 *   post:
 *     summary: Verify JWT token
 *     description: Verifies the JWT token passed in the request header and returns a message if valid.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token is valid and user ID is returned.
 *       400:
 *         description: Invalid token or expired.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/users/forgot-password:
 *   post:
 *     summary: Forgot password
 *     description: Initiates the password reset process for the user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset instructions sent to the user's email.
 *       404:
 *         description: User with the provided email not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/users/users-list:
 *   get:
 *     summary: Get a list of users with pagination, filtering, and grouping by continent
 *     description: Returns a list of users from the database, with options for pagination, role-based filtering, and searching by various criteria (e.g., name, email, country, continent, etc.).
 *     tags: [Users]
 *     parameters:
 *       - name: roleId
 *         in: query
 *         description: Filter users by role ID
 *         required: false
 *         schema:
 *           type: integer
 *       - name: search
 *         in: query
 *         description: Search for users by name, surname, email, country, continent, or currency
 *         required: false
 *         schema:
 *           type: string
 *       - name: page
 *         in: query
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         description: Number of users per page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: A list of users grouped by continent, including pagination metadata.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users retrieved successfully"
 *                 data:
 *                   type: object
 *                   additionalProperties:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         surname:
 *                           type: string
 *                         email:
 *                           type: string
 *                         mobile_no:
 *                           type: string
 *                         roleId:
 *                           type: integer
 *                         isActive:
 *                           type: boolean
 *                         address:
 *                           type: string
 *                         city:
 *                           type: string
 *                         postal_code:
 *                           type: string
 *                         country:
 *                           type: string
 *                         continent:
 *                           type: string
 *                         currency:
 *                           type: string
 *                         organization_number:
 *                           type: string
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 *                     totalPages:
 *                       type: integer
 *                       example: 5
 *                     previousPage:
 *                       type: string
 *                       example: "https://example.com/users/users-list?page=1&limit=10"
 *                     nextPage:
 *                       type: string
 *                       example: "https://example.com/users/users-list?page=3&limit=10"
 *       404:
 *         description: No users found for the specified criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No users found for the specified criteria."
 *       500:
 *         description: An internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server Error. Could not fetch users."
 */


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Returns the details of a user based on the unique ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the user
 *     responses:
 *       200:
 *         description: The details of the requested user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 email:
 *                   type: string
 *                 mobile_no:
 *                   type: string
 *                 roleId:
 *                   type: string
 *                 isActive:
 *                   type: boolean
 *       404:
 *         description: User with the provided ID not found.
 *       500:
 *         description: An internal server error occurred.
 */
