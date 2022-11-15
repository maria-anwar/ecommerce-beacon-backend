const Payment = require('../models/payment');

const getAllPayments = async(req, res)=>{
    let payments;
    try{
         payments = await Payment.find({})
    }catch(error){
        console.log(error);
    }
       
        //res.json(products)
        res.send(payments);
}
const getSinglePayment  = async(req, res)=>{
    let payment;
    try{
        
         payment = await payment.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       res.send(payment);
}
const storePayment  = async(req, res)=>{
    let payment= new Payment({
        user_id: req.body.user_id, 
        card_no: req.body.card_no,
        card_title: req.body.card_title,
        cvs_code: req.body.cvs_code,
    });
    
       try{
         
        await payment.save();
        res.send("Pament Details Saved");
    
       } catch(error){
        console.log(error);
       }
}
const updatePayment  = async(req, res)=>{
    let payment;
    try{        
         payment = await Payment.findById(req.params.id);

       } catch(error){
        return res.status(500).json({message:error.message});
       }
       console.log(payment);
       try{
            payment.user_id = req.body.user_id;
            payment.card_no = req.body.card_no;
            payment.card_title = req.body.card_title;
            payment.cvs_code = req.body.cvs_code;
            
            await payment.save(); 
       }catch(error){
            return res.status(404).json({message:"Problem in Updation"});
       }

    res.send("Product Status Updated");
}
const deletePayment  = async(req, res)=>{
    let payment;
    try{
        payment = await Payment.deleteOne({_id: req.params.id})
        res.send("Payment details Deleted");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}
module.exports={
    getAllPayments,
    getSinglePayment,
    storePayment,
    updatePayment,
    deletePayment,
}