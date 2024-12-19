const User = require("../model/user");
const createUser=async (req,res) => {
    const { name, email, age } = req.body;

    try {
      const newUser = new User({ name, email, age });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}
module.exports= createUser;