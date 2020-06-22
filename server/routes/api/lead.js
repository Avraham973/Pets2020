const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Lead = require('../../models/leadModel');
const auth = require('../../middleware/auth');

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

// @route   GET api/leads
// @desc    Get all new Leads list
// @access  Private
router.get('/', async (req, res) => {
  try {
    const lead = await Lead.find();
    res.status(200).json(lead);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      type: 'danger',
      title: 'אופס',
      content: 'משהו השתבש, אנו ממליצים לנסות שוב בקרוב'
    });
  }
});
module.exports = router;

// @route   PUT api/leads/edit/:id
// @desc    edit one lead docoment
// @access  Private
router.put('/edit/:id', async (req, res) => {
  try {
    const lead = await Lead.findOneAndUpdate(req.params.id, req.body, { new: true });

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !lead)
      return res.status(404).json({
        type: 'danger',
        title: 'אופס',
        content: 'לא נמצא ליד לעדכון, אנא נסה לרענן את הדף ולעדכן בשנית'
      });

    res
      .status(200)
      .json({ lead, msg: { type: 'success', title: 'תענוג', content: '!!!הרשומה עודכנה בהצלחה' } });

    // res.status(200).json({
    // type: 'success',
    // title: 'תענוג',
    // content: '!!!הרשומה עודכנה בהצלחה'
    // });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      type: 'danger',
      title: 'אופס',
      content: 'משהו השתבש, אנו ממליצים לנסות שוב בקרוב'
    });
  }
});

// @route   PUT api/leads/delete/:id
// @desc    Delete one lead docoment
// @access  Private
router.delete('/delete/:id', async (req, res) => {
  try {
    const lead = await Lead.findByIdAndRemove(req.params.id);

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !lead)
      return res.status(404).json({
        type: 'danger',
        title: 'אופס',
        content: 'לא נמצא ליד לעדכון, אנא וודא כי הרשומה קיימת '
      });

    res
      .status(200)
      .json({ msg: { type: 'success', title: 'יא מלך', content: '!!!הרשומה נמחקה בהצלחה' } });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      type: 'danger',
      title: 'אופס',
      content: 'משהו השתבש, אנו ממליצים לנסות שוב בקרוב'
    });
  }
});
module.exports = router;
