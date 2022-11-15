
const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    let products;
    try {
        products = await Product.find({})
    } catch (error) {
        console.log(error);
    }

    //res.json(products)
    res.send(products);
}

const getSingleProduct = async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:"Invalid Id !"});
    }

    try {
        let product = await Product.findById(req.params.id);
        return res.send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const storeProduct = async (req, res) => {

    //check for unique product code.
    productTemp = await Product.findOne({product_code: req.params.product_code}).exec();
    if(productTemp){
        return res.status(400).json({message:"product_code should be unique.."});
    }

    let product = new Product({
        product_code: req.body.product_code,
        title: req.body.title,
        description: req.body.description,
        sale_price: req.body.sale_price,
        cost_price: req.body.cost_price,
        available_qty: req.body.available_qty,
    });

    try {
        await product.save();
        return res.status(201).json({message:"Product is successfully Created !"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const updateProduct = async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:"Invalid Id !"});
    }
    let product;
    try {
        product = await Product.findById(req.params.id);
    } catch (error) {
        console.log(error);
    }
    console.log(product);
    try {
        product.product_code = req.body.product_code;
        product.title = req.body.title;
        //product.image_path = req.body.image_path;
        product.description = req.body.description;
        product.sale_price = req.body.sale_price;
        product.cost_price = req.body.cost_price;
        product.available_qty = req.body.available_qty;
        product.description = req.body.description;
        await product.save();
    } catch (error) {
        return res.status(404).json({ message: "Problem in Updation" });
    }

    res.send("Product Status Updated");

}
const deleteProduct = async (req, res) => {
    try {
        var product = await Product.deleteOne({ _id: req.params.id })
        res.send("Product Delete");
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "Id NOT FOUND" });
    }
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    storeProduct,
    updateProduct,
    deleteProduct
}