const Cart = require('../models/cart');

const getAllCarts = async(req, res)=>{
    let carts;
    try{
         carts = await Cart.find({})
    }catch(error){
        console.log(error);
    }       
        //res.json(cart)
        res.send(carts);
}
const getSingleCart  = async(req, res)=>{
    let cart;
    try{        
         cart = await Cart.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       res.send(cart);
}
const storeCart  = async(req, res)=>{
    let cart= new Cart({
        user_id: req.body.user_id, 
        product_id: req.body.product_id,
        product_quantity: req.body.product_quantity,
    });
    
       try{
         
        await cart.save();
        res.send("Cart is successfully saved");
    
       } catch(error){
        return res.status(500).json({message:error.message});
       }
}
const updateCart  = async(req, res)=>{
    let cart;
    try{       
         cart = await Cart.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       console.log(cart);
       try{
            cart.user_id = req.body.user_id;
            cart.product_id = req.body.message;
            cart.product_quantity = req.body.product_quantity;
          
            await contact.save(); 
       }catch(error){
            return res.status(500).json({message:"Server Problem in Saving Contact"});
       }

    res.send("Contact Status Updated"); 
}
const deleteCart  = async(req, res)=>{ 
    let cart;
    try{
        cart = await Cart.deleteOne({_id: req.params.id})
        res.send("Contact Deleted");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}
module.exports={
    getAllCarts,
    getSingleCart,
    storeCart,
    updateCart,
    deleteCart,
}