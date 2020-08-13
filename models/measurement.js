var mongoose = require('mongoose');
// Setup schema
var MeasurementSchema = mongoose.Schema({
    registrationDate: String,
    temperature: String,
    blood: [],
    oximeter: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Measurement model
var Measurement = module.exports = mongoose.model('measurement', MeasurementSchema);

module.exports.get = function (callback, limit) {
    Measurement.find(callback).limit(limit);
}