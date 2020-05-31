/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingTypeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  },
  clickecount: {
    type: Number,
    default: 0
  },
  trainingservice: {
    type: Schema.Types.ObjectId,
    ref: 'trainingservice'
  }
});

module.exports = TrainingType = mongoose.model('trainingtype', TrainingTypeSchema);
