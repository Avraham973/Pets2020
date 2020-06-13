const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Lead = require('../../models/leadModel');

// @route   POST api/lead
// @desc    New Lead Info
// @access  Public
router.post(
  '/',
  [
    check('fName', ' שם מלא הינו שדה חובה עם מינמום 2 תווים')
      .notEmpty()
      .isLength({ min: 2, max: 20 }),
    check('phone', ' טלפון הינו שדה חובה וחייב להכיל 10 מספרים בלבד')
      .notEmpty()
      .isLength({ min: 10, max: 10 }),
    check('email', 'אימייל הינו שדה חובה').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        type: 'danger',
        title: 'יש לתקן את השגיאות הבאות',
        content: errors.array().map(err => err.msg)
      });
    }

    const { fName, phone, email } = req.body;

    try {
      let lead = new Lead({
        fName,
        phone,
        email
      });

      await lead.save();

      res.status(200).json({ lead });
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
