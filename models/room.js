const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  user: [{
    type: Schema.Type.ObjectId,
    ref: 'user'
  }],
  message: [{
    user: {
      type: Schema.Type.ObjectId,
      ref: 'user'
    },
    message: String,
    createAt: String
  }]
});

module.exports = mongoose.model('room', roomSchema);
