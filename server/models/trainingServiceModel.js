const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingSeviceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sections: [
    {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      img: {
        type: String
      }
    }
  ]
});
