const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  isCallback: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Lead = mongoose.model('lead', LeadSchema);
