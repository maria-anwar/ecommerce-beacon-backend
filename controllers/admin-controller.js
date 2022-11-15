const Admin = require('../models/admin');

const getAllAdmin = async(req, res)=>{
    let admin;
    try{
        admin = await Admin.find({})
    }
    catch(error){
        console.log(error);
    }
    res.send(admin);
}

const getSingleAdmin = async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:"Invalid Id !"});
    }
    let admin;
    try {
        admin = await Admin.findById(req.params.id);
        if(admin){
            res.send(admin);
        } else {
            res.status(404).json({message:"Admin not found"});
        }
    } catch (error) {
        if(error.name == 'CastError'){
            console.log(error);
            return res.status(404).json({message:"Admin not found"});
        }
        res.status(500).json({message:"Internal Server Error"});
    }
    
}

const storeAdmin = async(req, res)=>{
    let admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role,
    })
    try{
        await admin.save();
        console.log('admin created.');
        res.status(200).json({message:"Admin Saved Successfully !"});
    }catch(error){
        console.error(error.message);
        return res.status(500).json({message:"Internal Server Error !"});
    }
}

const updateAdmin = async(req,res)=>{
    let admin;
    try{
        admin = await Admin.findById(req.params.id);
    }catch(error){
        return res.status(404).json({message:"Admin Not Found !"});
    }
    try{
        admin.name = req.body.name;
        admin.email = req.body.email;
        admin.password = req.body.password;
        admin.phone = req.body.phone;
        admin.role = req.body.role;
        admin.save();
        return res.status(200).json({message:"Admin Updated Successfully !"});
    }catch(error){
        return res.status(500).json({message:"Server Problem in Updation"});
    }
}

const deleteAdmin = async(req,res)=>{
    let admin;
    try{
        admin = await Admin.deleteOne({_id: req.params.id})
        res.send("Admin Delete");
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"Id NOT FOUND"});
       }
}

module.exports = {
    getAllAdmin,
    getSingleAdmin,
    storeAdmin,
    updateAdmin,
    deleteAdmin
}