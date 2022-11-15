const User = require('../models/user');

const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find({})
        res.send(users);
    } catch (error) {
        console.log(error);
    }

    //res.json(products)
}


const getSingleUser = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);
        if(user){
            res.send(user);
        } else {
            res.status(404).json({message:"User not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
    
}
const storeUser = async (req, res) => {
    let user = new User({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        email: req.body.email,
    });

    try {

        await user.save();
        res.send("User is successfully saved");

    } catch (error) {
        console.log(error);
    }
}
const updateUser = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);

    } catch (error) {
        console.log(error);
    }
    console.log(user);
    try {
        user.name = req.body.name;
        user.address = req.body.address;
        user.phone = req.body.phone;
        user.country = req.body.country;
        user.city = req.body.city;
        user.email = req.body.email;

        await user.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Problem in Updation" });
    }

    res.send("User is Updated");
}
const deleteUser = async (req, res) => {
    try {
        var user = await User.deleteOne({ _id: req.params.id })
        res.send("User Deleted");
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "Id NOT FOUND" });
    }
}
module.exports = {
    getAllUsers,
    getSingleUser,
    storeUser,
    updateUser,
    deleteUser,
}