const Contact = require('../models/contact');

const getAllContacts = async(req, res)=>{
    let contacts;
    try{
         contacts = await Contact.find({})
    }catch(error){
        console.log(error);
    }       
        //res.json(products)
        res.send(contacts);
}
const getSingleContact = async(req, res)=>{
    let contact;
    try{        
         contact = await Contact.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       res.send(contact);
}

const storeContact  = async(req, res)=>{
    let contact= new Contact({
        user_id: req.body.user_id, 
        message: req.body.message,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
    });
    
       try{
         
        await contact.save();
        res.send("Product is successfully saved");
    
       } catch(error){
        console.log(error);
       }
       
}
const updateContact  = async(req, res)=>{
    let contact;
    try{       
         contact = await Contact.findById(req.params.id);

       } catch(error){
        console.log(error);
       }
       console.log(contact);
       try{
            contact.user_id = req.body.user_id;
            contact.message = req.body.message;
            contact.user_name = req.body.user_name;
            contact.user_email = req.body.user_email;
            
            await contact.save(); 
       }catch(error){
            return res.status(500).json({message:"Server Problem in Saving Contact"});
       }

    res.send("Contact Status Updated");
}
const deleteContact  = async(req, res)=>{
    let contact;
    try{
        contact = await Contact.deleteOne({_id: req.params.id})
        res.send("Contact Deleted");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}

module.exports = {
    getAllContacts,
    getSingleContact,
    storeContact,
    updateContact,
    deleteContact,
}