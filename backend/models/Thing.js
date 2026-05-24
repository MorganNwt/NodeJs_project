const mongose = require('mongoose');
    
const thingSchema = mongose.Schema({
    title : { type: String, requiered: true },
    description : { type: String, requiered: true },
    imageUrl : { type: String, requiered: true },
    price : { type: Number, requiered: true },
    userId : { type: String, requiered: true },
});

module.exports = mongose.model('Thing', thingSchema);