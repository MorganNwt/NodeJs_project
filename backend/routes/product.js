const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/Product');


router.post('/api/products', productCtrl.createProduct);
router.get('/api/products', productCtrl.getAllProducts);
router.get('/api/products/:id', productCtrl.getProductById);
router.put('/api/products/:id', productCtrl.updateProduct);
router.delete('/api/products/:id', productCtrl.deleteProduct);

module.exports = router;


