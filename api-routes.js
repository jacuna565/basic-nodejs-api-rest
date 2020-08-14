let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: 200,
    message: "API Its Working",
  });
});

var measurement = require("./controllers/measurement.js");

/**
 * @swagger
 *
 * definitions:
 *   NewMeasurement:
 *     type: object
 *     required:
 *       - registrationDate
 *       - temperature
 *       - blood
 *       - oximeter
 *     properties:
 *       registrationDate:
 *         type: string
 *       temperature:
 *         type: string
 *       blood:
 *         type: array
 *         items: 
 *           type: string
 *       oximeter:
 *         type: array
 *         items: 
 *           type: string
 *   Measurement:
 *     allOf:
 *       - $ref: '#/definitions/NewMeasurement'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: string
 */

/**
 * @swagger
 * /measurements:
 *   get:
 *     sumary: Get all measurements
 *     description: list all measurements objects
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Measurements
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Measurement'
 *   post:
 *     summary: Creates a Measurement
 *     description: Save the information of the measure
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: measurement
 *         description: Measurement object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewMeasurement'
 *     responses:
 *       200:
 *         description: measurements
 *         schema:
 *           $ref: '#/definitions/Measurement'
 */
router.route("/measurements").get(measurement.index).post(measurement.new);



/**
 * @swagger
 * /measurements/:id:
 *   put:
 *     summary: Update a Measurement
 *     description: Update the information of a measure given a id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: measurement
 *         description: Measurement object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewMeasurement'
 *     responses:
 *       200:
 *         description: measurements
 *         schema:
 *           $ref: '#/definitions/Measurement'
 */
router
  .route("/measurements/:id")
  .get(measurement.view)
  .patch(measurement.update)
  .put(measurement.update)
  .delete(measurement.delete);

module.exports = router;
