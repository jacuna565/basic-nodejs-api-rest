let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 200,
        message: 'API Its Working',
    });
});

var measurement = require('./controllers/measurement.js');

router.route('/measurements')
    .get(measurement.index)
    .post(measurement.new);

router.route('/measurements/:id')
    .get(measurement.view)
    .patch(measurement.update)
    .put(measurement.update)
    .delete(measurement.delete);

module.exports = router;