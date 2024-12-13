/**
 * @swagger
 * tags:
 *   - name: Languages
 *     description: API endpoints for managing languages
 */

/**
 * @swagger
 * security:
 *   - bearerAuth: []  # This applies bearer authentication globally to all endpoints
 */

/**
 * @swagger
 * /api/languages:
 *   get:
 *     summary: Retrieve a list of all languages
 *     description: Returns all languages available in the database. Optionally, a name query parameter can be provided to filter languages by name.
 *     tags: [Languages]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: The name of the language to search for (case-insensitive).
 *     responses:
 *       200:
 *         description: A list of languages matching the name search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 languages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The unique ID of the language.
 *                       name:
 *                         type: string
 *                         description: The name of the language.
 *       404:
 *         description: No languages found matching the provided search criteria.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/languages/{id}:
 *   get:
 *     summary: Retrieve a specific language by ID
 *     description: Returns the details of a language based on its unique ID.
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the language to retrieve.
 *     responses:
 *       200:
 *         description: Details of the requested language.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique ID of the language
 *                 code:
 *                   type: string
 *                   description: The unique language code
 *                 name:
 *                   type: string
 *                   description: The name of the language
 *       404:
 *         description: The requested language was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/languages/{id}:
 *   put:
 *     summary: Update a specific language by ID
 *     description: Updates the details of a language based on its unique ID.
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the language to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The unique language code
 *               name:
 *                 type: string
 *                 description: The name of the language
 *     responses:
 *       200:
 *         description: The updated language.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique ID of the language
 *                 code:
 *                   type: string
 *                   description: The unique language code
 *                 name:
 *                   type: string
 *                   description: The name of the language
 *       400:
 *         description: Bad request. Invalid input data.
 *       404:
 *         description: The requested language was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/languages/{id}:
 *   delete:
 *     summary: Delete a specific language by ID
 *     description: Deletes the language based on its unique ID.
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the language to delete.
 *     responses:
 *       200:
 *         description: Language deleted successfully.
 *       404:
 *         description: The requested language was not found.
 *       500:
 *         description: An internal server error occurred.
 */