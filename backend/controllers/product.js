const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
    delete req.body._id;
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json({ product }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json({ products }))
        .catch(error => res.status(400).json({ error }));
};

exports.getProductById = (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(404).json({ error }));
};

exports.updateProduct = (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Produit modifié !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Produit supprimé !'}))
        .catch(error => res.status(400).json({ error }));
};