const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const registeredUser = await newUser.save();
    res.status(200).json(registeredUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post('/login', async (req, res)=>{
    try{
        const matchedUser = await User.findOne({email: req.body.email})
        !matchedUser && res.status(400).json("wrong username")

        const validated = await bcrypt.compare(req.body.password, matchedUser.password)
        !validated && res.status(400).json("wrong password")

        validated && res.status(200).json('successfully logged in')
    } catch(err){
        res.status(500).json(err)
    }  
})

// GET USER DATA
router.get('/', async (req, res)=>{
  const email = req.query.email
  try{
    const matchedUser = await User.find({email})
    res.status(200).json(matchedUser)
  } catch(err){
    res.status(500).json(err);
  }
})
module.exports = router;
