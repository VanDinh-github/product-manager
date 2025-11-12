const Product = require('../../models/product.model.js')

module.exports.index = async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    const newProducts = products.map((item) => {
        item.newPrice = (item.price - item.price*(item.discountPercentage/100)).toFixed(2)
        return item
    })
    res.render('client/pages/products/index.pug', {
        pageTitle: 'Trang sản phẩm', 
        products: newProducts
    });
}