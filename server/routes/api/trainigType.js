const express = require('express');
const router = express.Router();

const TrayningType = require('../../models/trainingTypeModel');

// @route    GET api/trainingtype
// @desc     Get all trainng type that we will display on the home page
// @access   public
router.get('/', async (req, res) => {
  try {
    const trainingTypes = await TrayningType.find();

    res.json(trainingTypes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
