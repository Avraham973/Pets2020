/** @format */

const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/userModel');
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    //Get the user from the DB
    const user = await await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authentecate User & get token (Login)
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is reqired').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('auth route1', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    //console.log(req.body); //The obj data sent to this route

    const { email, password } = req.body;
    try {
      //Check if the user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          type: 'danger',
          title: 'התחברות נכשלה',
          content: 'הפרטים שהוזנו אינם תואמים לאלו שבמערכת'
        });
      }

      //In this line we compare the 'password' that has been given from the user
      //within the encypted password that we just retrievd from the DB
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          type: 'danger',
          title: 'התחברות נכשלה',
          content: 'הפרטים שהוזנו אינם תואמים לאלו שבמערכת'
        });
      }

      //Sending back the JSON -ksonwebtoken
      const payload = {
        user: {
          id: user._id
        }
      };
      jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
