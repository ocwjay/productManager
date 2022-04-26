const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getProduct);
    app.put('/api/products/:_id', ProductController.updateProduct);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
}