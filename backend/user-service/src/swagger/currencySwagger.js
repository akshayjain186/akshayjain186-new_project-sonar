/**
 * @swagger
 * tags:
 *   - name: Currencies
 *     description: API endpoints for managing currencies
 */

/**
 * @swagger
 * security:
 *   - bearerAuth: []  # This applies bearer authentication globally to all endpoints
 */

/**
 * @swagger
 * /api/currencies:
 *   get:
 *     summary: Retrieve a list of all currencies
 *     description: Returns all currencies available in the database. Optionally, a currency name can be provided to filter the results.
 *     tags: [Currencies]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: The name of the currency to search for (case-insensitive).
 *     responses:
 *       200:
 *         description: A list of currencies.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 currencies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The unique ID of the currency.
 *                       name:
 *                         type: string
 *                         description: The name of the currency.
 *       404:
 *         description: No currencies found matching the provided search criteria.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/currencies/{currencycode}:
 *   get:
 *     summary: Retrieve a specific currency by currency code
 *     description: Returns the details of a currency based on its unique currency code.
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: currencycode
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique currency code of the currency to retrieve.
 *     responses:
 *       200:
 *         description: Details of the requested currency.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 currencycode:
 *                   type: string
 *                   description: The unique currency code
 *                 name:
 *                   type: string
 *                   description: The name of the currency
 *       404:
 *         description: The requested currency was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/currencies/{currencycode}:
 *   put:
 *     summary: Update an existing currency by currency code
 *     description: Updates the details of a currency based on its unique currency code.
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: currencycode
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique currency code of the currency to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currencycode:
 *                 type: string
 *                 description: The unique currency code
 *               name:
 *                 type: string
 *                 description: The name of the currency
 *     responses:
 *       200:
 *         description: The currency was successfully updated.
 *       400:
 *         description: Bad request. The provided data is invalid.
 *       404:
 *         description: The currency with the specified code was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/currencies/list/{id}:
 *   get:
 *     summary: Retrieve a specific currency list by ID
 *     description: Returns the details of a currency based on its unique ID.
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the currency to retrieve.
 *     responses:
 *       200:
 *         description: Details of the requested currency.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 currencycode:
 *                   type: string
 *                   description: The unique currency code
 *                 name:
 *                   type: string
 *                   description: The name of the currency
 *       404:
 *         description: The requested currency was not found.
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * /api/currencies/{currencycode}:
 *   delete:
 *     summary: Delete a currency by currency code
 *     description: Deletes the currency based on its unique currency code.
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: currencycode
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique currency code of the currency to delete.
 *     responses:
 *       200:
 *         description: The currency was successfully deleted.
 *       404:
 *         description: The currency with the specified currency code was not found.
 *       500:
 *         description: An internal server error occurred.
 */