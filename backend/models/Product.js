const mongose = require('mongoose');

const productSchema = mongose.Schema({
    name : { type: String, required: true },
    description : { type: String, required: true },
    price : { type: Number, required: true },
    inStock : { type: Boolean, required: true },
});

module.exports = mongose.model('Product', productSchema);
