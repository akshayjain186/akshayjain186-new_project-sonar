/**
 * @swagger
 * tags:
 *   - name: Countries
 *     description: API endpoints for managing countries
 */

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Retrieve a list of all countries
 *     description: Returns all countries available in the database. Optionally, a country name can be provided to filter the results.
 *     tags: [Countries]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: The name of the country to search for (case-insensitive).
 *     responses:
 *       200:
 *         description: A list of countries.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request
 *                 countries:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The unique ID of the country
 *                       name:
 *                         type: string
 *                         description: The name of the country
 *       404:
 *         description: No countries found matching the provided search criteria.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     summary: Retrieve a specific country by ID
 *     description: Returns the details of a country based on its unique ID.
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the country to retrieve.
 *     responses:
 *       200:
 *         description: Details of the requested country.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   description: The country code (unique identifier)
 *                 name:
 *                   type: string
 *                   description: The name of the country
 *                 emoji:
 *                   type: string
 *                   description: The emoji representing the country (optional)
 *       400:
 *         description: Bad request. The ID supplied is invalid.
 *       404:
 *         description: The requested country was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     summary: Update an existing country by ID
 *     description: Updates the details of a country based on its unique ID.
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the country to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The country code (unique identifier)
 *               name:
 *                 type: string
 *                 description: The name of the country
 *               emoji:
 *                 type: string
 *                 description: The emoji representing the country (optional)
 *     responses:
 *       200:
 *         description: The country was successfully updated.
 *       400:
 *         description: Bad request. The provided data is invalid.
 *       404:
 *         description: The country with the specified ID was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     summary: Delete a country by ID
 *     description: Deletes the country based on its unique ID.
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the country to delete.
 *     responses:
 *       200:
 *         description: The country was successfully deleted.
 *       400:
 *         description: Bad request. The ID supplied is invalid.
 *       404:
 *         description: The country with the specified ID was not found.
 *       500:
 *         description: An internal server error occurred.
 */
