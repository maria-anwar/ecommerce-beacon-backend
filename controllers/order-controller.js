const Order = require('../models/order');

const getAllOrders = async(req, res)=>{
    let orders;
    try{
         products = await Order.find({})
    }catch(error){
        console.log(error);
    }
       
        //res.json(products)
        res.send(orders);
}
const getSingleOrder  = async(req, res)=>{
    let order;
    try{
        
        order = await Order.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       res.send(order); 
}
const storeOrder  = async(req, res)=>{
    let order= new Order({
        product_code: req.body.product_code, 
        email: req.body.email,
        amount: req.body.amount,
        paymeny_method: req.body.paymeny_method,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        shipment_address: req.body.shipment_address,
        order_status: req.body.order_status,
        
    });
    
       try{
         
        await order.save();
        res.send("Order is successfully saved");
    
       } catch(error){
        console.log(error);
       }
}
const updateOrder  = async(req, res)=>{
    let order;
    try{       
         order = await Order.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       console.log(order);
       try{
            order.product_code = req.body.product_code;
            order.email = req.body.email;
            order.amount = req.body.amount;
            order.paymeny_method = req.body.paymeny_method;
            order.address = req.body.address;
            order.country = req.body.country;
            order.city = req.body.city;
            order.shipment_address = req.body.shipment_address;
            order.order_status = req.body.order_status;

            await order.save(); 
       }catch(error){
            return res.status(404).json({message:"Problem in Updation"});
       }

    res.send("Order Status Updated");
}
    const deleteOrder  = async(req, res)=>{
        let  order;
    try{
        order = await Order.deleteOne({_id: req.params.id})
        res.send("Order is  Deleted");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}
module.exports = {
    getAllOrders,
    getSingleOrder,
    storeOrder,
    updateOrder,
    deleteOrder,
}