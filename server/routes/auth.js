// auth.js
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');

/* Config multer */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads'); // Store uploaded files in the uploads folder
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage });

/* User regisration */
router.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    /* All info from a form*/
    const { firstName, lastName, email, password } = req.body;
    /* Upload profile image to server */
    const profileImage = req.file

    if(!profileImage) {
      return res.status(400).json({
        error: 'Please upload a profile image'
      })
    }

    /* Path to the profile image */
    const profileImagePath = profileImage.path

    /* Check if user exists */
    const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
      }

    /* Hash password */
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    /* Create new user */
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      profileImagePath,
    });

    /* Save user to database */
    await newUser.save();

    /* Send a succesfull message */
    res.status(200).json({
      message: 'User created successfully',
      user: newUser
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({  message: 'Registration failed', error: err.message });
  }    
});

/* User login */
router.post('/login', async (req, res) => {
  try {
  /* All info from a form */
  const { email, password } = req.body;
  console.log('Email:', email);

  /* Check if user exists */
  const user = await User.findOne({ email })
  if (!user) {
    console.log('User not found:', email); 
    return res.status(400).json({ message: 'User does not exists' })
   }

  /* Check if password is correct */
  const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' })
    }

  /* Create JWT token */
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
  delete user.password
  console.log('User data:', user);

  res.status(200).json({
    message: 'Login successful',
    token,
    user, 
  })
  
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
})

module.exports = router;

