/** @format */

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
// const config = require("config");
require('dotenv-extended').load();

const { JWT_SECRET } = process.env;
var jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

router.get('/', (req, res) => {
  console.log('ive got the get for users route!!!');
  res.status(200).send('you are amazing!!!');
});

// @route   POST api/user
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('firstname', ' שם הינו שדה חובה עם מינמום 2 תווים')
      .notEmpty()
      .isLength({ min: 2, max: 20 }),
    check('lastname', ' שם הינו שדה חובה עם מינמום 2 תווים')
      .notEmpty()
      .isLength({ min: 2, max: 20 }),
    check('phone', ' טלפון הינו שדה חובה וחייב להכיל 10 מספרים בלבד')
      .notEmpty()
      .isLength({ min: 10, max: 10 }),
    check('email', 'אימייל הינו שדה חובה').isEmail(),
    check('password', 'הסיסמא חייבת להכיל לפחות 6 תווים').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).json({ errors: errors.array() });
    }
    const { firstname, lastname, phone, email, password } = req.body;
    try {
      //See if the user exists
      let user = await User.findOne({
        $or: [{ email }, { phone }]
      });
      if (user) {
        return res
          .status(400)
          .json({ type: 'info', title: 'משתמש קיים במערכת', content: 'באפשרותך לשחזר את הסיסמסא' });
      }

      user = new User({
        firstname,
        lastname,
        phone,
        email,
        password
      });

      //Encrypt password
      const salt = bcrypt.genSaltSync(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        type: 'danger',
        title: 'אופס',
        content: 'משהו השתבש, אנו ממליצים לנסות שוב בקרוב'
      });
    }
  }
);

module.exports = router;
