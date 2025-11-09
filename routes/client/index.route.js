const productRoute = require('./product.route');
const homeRoute = require('./home.route');

module.exports = (app) => {
    //- Home route
    app.use('/', homeRoute);
    //- Use product routes
    app.use('/products', productRoute);

}