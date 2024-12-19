const User = require("../model/user");

const getUser =async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    
}
module.exports =getUser;