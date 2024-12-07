/**
 * @swagger
 * tags:
 *   - name: Continents
 *     description: API endpoints for managing continents
 */

/**
 * @swagger
 * /api/continents:
 *   get:
 *     summary: Retrieve a list of all continents
 *     description: Returns all continents available in the database.
 *     tags: [Continents]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: The name of the continent to search for (case-insensitive).
 *     responses:
 *       200:
 *         description: A list of continents.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Auto-generated ID of the continent
 *                   name:
 *                     type: string
 *                     description: Name of the continent
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/continents/{id}:
 *   get:
 *     summary: Retrieve a specific continent by ID
 *     description: Returns the details of a continent based on its unique ID.
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the continent to retrieve.
 *     responses:
 *       200:
 *         description: Details of the requested continent.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Auto-generated ID of the continent
 *                 name:
 *                   type: string
 *                   description: Name of the continent
 *       400:
 *         description: Bad request. The ID supplied is invalid.
 *       404:
 *         description: The requested continent was not found.
 *       500:
 *         description: An internal server error occurred.
 */
