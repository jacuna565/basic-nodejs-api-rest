Measurement = require('../models/measurement');
// Handle index actions
exports.index = function (req, res) {
    Measurement.get(function (err, measurements) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: 200,
            message: "measurements retrieved successfully",
            data: measurements
        });
    });
};

// Handle create measurement actions
exports.new = function (req, res) {
    var measurement = new Measurement();
    measurement.registrationDate = req.body.registrationDate;
    measurement.temperature = req.body.temperature;
    measurement.blood = req.body.blood;
    measurement.oximeter = req.body.oximeter;
    measurement.create_date = req.body.create_date;

    measurement.save(function (err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New measurement created!',
                data: measurement
            });
    });
};

// Handle view measurement info
exports.view = function (req, res) {
    Measurement.findById(req.params.id, function (err, measurement) {
        if (err)
            res.send(err);
        res.json({
            message: 'Measurement details loading..',
            data: measurement
        });
    });
};

// Handle update measurement info
exports.update = function (req, res) {
    Measurement.findById(req.params.id, function (err, measurement) {
        if (err)
            res.send(err);
        measurement.registrationDate = req.body.registrationDate;
        measurement.temperature = req.body.temperature;
        measurement.blood = req.body.blood;
        measurement.oximeter = req.body.oximeter;
        measurement.create_date = req.body.create_date;

        measurement.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'measurement Info updated',
                data: measurement
            });
        });
    });
};

// Handle delete measurement
exports.delete = function (req, res) {
    Measurement.remove({
        _id: req.params.id
    }, function (err, measurement) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Measurement deleted'
        });
    });
};