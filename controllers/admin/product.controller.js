const Product = require("../../models/product.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  let filterStatus = [
  {
    name: "Tất cả",
    status: "",
    class: ""
  },
  {
    name: "Hoạt động",
    status: "active",
    class: ""
  },
  {
    name: "Dừng hoạt động",
    status: "inactive",
    class: ""
  }]

  let find = {
    deleted: false
  }

  if (req.query.status) {
    const index = filterStatus.findIndex((item) => {
      return item.status === req.query.status
    })
    filterStatus[index].class = "active";
    find.status = req.query.status;
  } else {
    filterStatus[0].class='active'}
  
  const products = await Product.find(find);

  console.log(products);
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Trang sản phẩm",
    products: products,
    filterStatus: filterStatus
  });
};
