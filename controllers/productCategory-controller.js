const ProductCategory = require('../models/productCategory');

const getAllProductCategories = async(req, res)=>{
    let productCategory;
    try{
         productCategory = await ProductCategory.find({})
    }catch(error){
        console.log(error);
    }       
        //res.json(products)
        res.send(productCategory);
}
const getSingleProductCategory  = async(req, res)=>{
    let productCategory;
    try{    
         productCategory = await ProductCategory.findById(req.params.id);
       } catch(error){
        console.log(error);
       }
       res.send(productCategory);
}
const storeProductCategory = async(req, res)=>{
    let productCategory= new ProductCategory({
        product_code: req.body.product_code, 
        name: req.body.name,
    });
    
       try{         
        await productCategory.save();
        res.send("ProductCategor is Saved");
    
       } catch(error){
        console.log(error);
       } 
}
const updateProductCategory  = async(req, res)=>{
    let productCategory;
    try{
        
        productCategory = await productCategory.findById(req.params.id);

       } catch(error){
        return res.status(500).json({message:error.message});
       }
       console.log(productCategory);
       try{
            productCategory.product_code = req.body.product_code;
            productCategory.name = req.body.name;
            await productCategory.save(); 
       }catch(error){ 
            return res.status(404).json({message:"Problem in Updation"});
       }

    res.send("Product Status Updated");
}
const deleteProductCategory  = async(req, res)=>{
    let productCategory;
    try{
        productCategory = await productCategory.deleteOne({_id: req.params.id})
        res.send("Product Delete");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}

module.exports = {
    getAllProductCategories,
    getSingleProductCategory,
    storeProductCategory,
    updateProductCategory,
    deleteProductCategory,
}